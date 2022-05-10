import { gql, useApolloClient } from '@apollo/client';
import { ReportPlayAnalyticsDocument } from '@generated-gql';
import * as Sentry from '@sentry/nextjs';
import { basicRandomString } from '@utils/randomString';
import { memo, useEffect } from 'react';
import { proxy, subscribe, useSnapshot } from 'valtio';

const uniqueUserId =
  typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : basicRandomString();

export const playerAnalyticsState = proxy<{
  current: {
    trackId?: string;
    start?: number;
  };
  uniqueUserId: string;
  backgroundPollingTime: number;
}>({
  current: {},
  uniqueUserId,
  backgroundPollingTime: 1000,
});

typeof window !== 'undefined' &&
  subscribe(playerAnalyticsState, () => {
    reportPlayerAnalytics();
  });

export const analyticsToReport: Array<{
  trackId: string;
  start: number;
  timestamp: number;
}> = proxy([]);

function reportPlayerAnalytics() {
  const {
    current: { trackId, start },
  } = playerAnalyticsState;

  if (!trackId || !start) return;

  analyticsToReport.push({
    trackId,
    start,
    timestamp: Date.now(),
  });
}

let analyticsBackground: ReturnType<typeof setInterval> | undefined;

function startAnalyticsBackground() {
  if (analyticsBackground != null) return;

  analyticsBackground = setInterval(() => {
    reportPlayerAnalytics();
  }, playerAnalyticsState.backgroundPollingTime);
}

function pauseAnalyticsBackground() {
  clearInterval(analyticsBackground!);
  analyticsBackground = undefined;
}

export function playSongAnalytics({ trackId }: { trackId: string }) {
  if (playerAnalyticsState.current.trackId !== trackId) {
    playerAnalyticsState.current.start = Date.now();
    pauseAnalyticsBackground();
  }
  playerAnalyticsState.current.trackId = trackId;
  startAnalyticsBackground();
}

export function pauseSongAnalytics() {
  delete playerAnalyticsState.current.start;
  delete playerAnalyticsState.current.trackId;

  pauseAnalyticsBackground();
}

gql(/* GraphQL */ `
  mutation reportPlayAnalytics(
    $uuid: UUID!
    $trackId: UUID!
    $start: Timestamp!
    $timestamp: Timestamp!
  ) {
    reportPlay(uuid: $uuid, trackId: $trackId, start: $start, timestamp: $timestamp)
  }
`);

export const PlayerAnalyticsReporter = memo(function PlayerAnalyticsReporter() {
  const client = useApolloClient();

  const { length: reportsSize } = useSnapshot(analyticsToReport);

  useEffect(() => {
    const latestReport = analyticsToReport.shift();

    if (!latestReport) return;

    client
      .mutate({
        mutation: ReportPlayAnalyticsDocument,
        variables: {
          uuid: uniqueUserId,
          trackId: latestReport.trackId,
          start: latestReport.start,
          timestamp: latestReport.timestamp,
        },
      })
      .catch(err => {
        Sentry.captureException(err);
      });
  }, [reportsSize, client]);

  return null;
});
