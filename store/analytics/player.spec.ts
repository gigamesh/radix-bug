import { describe, test, expect } from 'vitest';

import { playSongAnalytics, analyticsToReport, playerAnalyticsState } from './player';

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

describe('Player analytics', () => {
  test('tracks', async () => {
    playerAnalyticsState.backgroundPollingTime = 10;

    const firstTimestamp = Date.now();

    await sleep(0);

    playSongAnalytics({
      trackId: 'foo',
    });

    await sleep(0);

    expect(analyticsToReport.length).toBe(1);

    expect(analyticsToReport[0]).toBeTruthy();

    expect(analyticsToReport[0]!.start).toBeGreaterThanOrEqual(firstTimestamp);

    expect(analyticsToReport[0]!.timestamp).toBeGreaterThanOrEqual(analyticsToReport[0]!.start);

    expect(analyticsToReport[0]!.trackId).toBe('foo');

    await sleep(15);

    // Since setTimeout is not a strict timer, it can't guarantee to be less 20 milliseconds
    expect(analyticsToReport.length).toBeGreaterThanOrEqual(2);

    expect(analyticsToReport[1]).toBeTruthy();

    expect(analyticsToReport[1]!.start).toBe(analyticsToReport[0]!.start);

    expect(analyticsToReport[1]!.timestamp).toBeGreaterThan(analyticsToReport[0]!.timestamp);

    expect(analyticsToReport[1]!.trackId).toBe('foo');
  });
});
