import { BigNumber } from '@ethersproject/bignumber';
import { hexValue } from '@ethersproject/bytes';
import type { Web3Provider } from '@ethersproject/providers';
import { formatEther, parseEther } from '@ethersproject/units';
import type { Release } from '@generated-gql';
import { useTimer } from '@hooks/useTimer';
import * as Sentry from '@sentry/nextjs';
import {
  chainIds,
  DAY,
  defaultChainId,
  HOUR,
  metadataBaseURI,
  MINUTE,
  MONTH,
  OPENSEA_BASE_URL,
  SPOTIFY_BASE_URL,
  WEEK,
  YEAR,
} from '@utils/constants';
import dayjs from 'dayjs';
import numeral from 'numeral';
import { UnsupportedChainError } from './error';
import { formatDuration, intervalToDuration } from 'date-fns';

export * from '@sound-xyz/chain-helpers/src/isomorphic';
export * from '@sound-xyz/utils';

///////////// GLOBAL HELPERS

export const capitalCase = (str?: string) => {
  if (!str) return '';
  const lower = str.toLowerCase();
  return lower.charAt(0).toUpperCase() + lower.slice(1);
};

export const formatUSD = (num: number) => {
  if (num > 999999999) {
    return '$' + numeral(num).format('0,0.000a');
  } else return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(num);
};

export const formatNumber = (num: number) => {
  if (num > 999999999) {
    return numeral(num).format('0,0.000a');
  } else return new Intl.NumberFormat('en-US').format(num);
};

/* 
  Accepts a string denominated in wei and returns a string with a minmal number of digits
*/
export const formatWeiToEth = (weiValue: string, maxDecimals: number = 4) => {
  try {
    const numToFormat = BigNumber.from(weiValue);
    const decimals = numToFormat.gt(parseEther('0.1')) ? maxDecimals - 1 : maxDecimals;
    const converted = formatEther(numToFormat);
    const shortened = (+converted).toFixed(decimals);
    // if tiny, round to zero, else remove trailing zeros by converting to string
    return parseFloat(shortened) < 0.000001 ? '0' : parseFloat(shortened).toString();
  } catch (err) {
    console.error(err);
    Sentry.captureException(err);
    return '0';
  }
};

export const getTimeUnit = (milliseconds: number) => {
  if (milliseconds > 3.154e10) {
    return 'years';
  } else if (milliseconds > 6.048e8) {
    return 'weeks';
  } else if (milliseconds > 8.64e7) {
    return 'days';
  } else if (milliseconds > 3.6e6) {
    return 'hours';
  } else {
    return 'minutes';
  }
};

// convert unix timestamp to Date object
export const unixToDate = (unix: number) => new Date(unix * 1000);

export function timeAgo(date: Date, removeAppendedText?: boolean) {
  const secondsAgo = Math.round((+new Date() - +date) / 1000);
  let divisor = 1;
  let unit = null;

  if (secondsAgo < MINUTE) {
    if (removeAppendedText) {
      return secondsAgo + ' secs';
    }

    return secondsAgo + ' secs ago';
  } else if (secondsAgo < HOUR) {
    [divisor, unit] = [MINUTE, 'min'];
  } else if (secondsAgo < DAY) {
    [divisor, unit] = [HOUR, 'hour'];
  } else if (secondsAgo < WEEK) {
    [divisor, unit] = [DAY, 'day'];
  } else if (secondsAgo < MONTH) {
    [divisor, unit] = [WEEK, 'week'];
  } else if (secondsAgo < YEAR) {
    [divisor, unit] = [MONTH, 'month'];
  } else if (secondsAgo > YEAR) {
    [divisor, unit] = [YEAR, 'year'];
  }

  const count = Math.floor(secondsAgo / divisor);
  const timeAgo = `${count} ${unit}${count > 1 ? 's' : ''}`;

  if (removeAppendedText) {
    return timeAgo;
  }

  return `${timeAgo} ago`;
}

export function isoDateToMs(date: string): number;
export function isoDateToMs(date: string | null | undefined): number | undefined;
export function isoDateToMs(date: string | null | undefined) {
  return date ? new Date(date).getTime() : undefined;
}

type GetReleasePartyDateLabelArgs = {
  editionId?: string | null;
  mintStartTime?: number;
  createdAt?: string;
  trackDuration: number;
};

export function getReleasePartyDateLabel(args: GetReleasePartyDateLabelArgs) {
  const { editionId, mintStartTime, createdAt, trackDuration } = args;

  // not yet minted
  if (!editionId || !mintStartTime || !createdAt) {
    return '';
  }

  // mintingStart is greater of mint date and curr date (to deal with dates set to the past)
  const mintingStartMs = Math.max(mintStartTime * 1000, new Date(createdAt).getTime());
  const hasMintingStarted = mintingStartMs <= new Date().getTime();
  const trackDurationMs = trackDuration * 1000;

  const releasePartyDateTime = new Date(mintingStartMs - trackDurationMs);

  return hasMintingStarted
    ? timeAgo(releasePartyDateTime)
    : dayjs(releasePartyDateTime).format('MMM D, LT');
}

export const isValidUrl = (str: string) => {
  let url;
  try {
    url = new URL(str);
  } catch (_) {
    return false;
  }
  return url.protocol === 'http:' || url.protocol === 'https:';
};

export const useFormattedTimeTablet = (expiryTime: Date | number) => {
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp: expiryTime,
  });

  const formattedDay = `${days ? days + ' days' : ''}`;
  const formattedHour = `${hours ? ' ' + hours + ' hours' : ''}`;
  const formattedMin = `${minutes ? ' ' + minutes + ' minutes' : ''}`;
  // hiding seconds if longer than a day to reduce length
  const formattedSec = `${days ? ' ' : ' ' + seconds + ' sec'}`;

  return `in ${formattedDay} ${formattedHour} ${formattedMin} ${formattedSec}`;
};

export const useFormattedTimeMobile = (expiryTime: Date | number) => {
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp: expiryTime,
  });

  const formattedDay = `${days ? (days > 1 ? days + ' days' : days + ' day') : ''}`;
  const formattedHour = `${hours ? '' + hours + ':' : ''}`;
  const formattedMinute = `${days ? (minutes ? minutes : '') : minutes ? '' + minutes + ':' : ''}`;
  const formattedSec = `${days ? '' : '' + seconds}`;

  return `in ${formattedDay} ${formattedHour}${formattedMinute}${formattedSec}`;
};

/** Type optional values https://flow.org/en/docs/types/maybe */
export type Maybe<T> = T | null | undefined;

///////////// CHAIN HELPERS

function etherscanPrefix(chainId: number) {
  let prefix = '';

  switch (chainId) {
    case chainIds.MAINNET:
      prefix = '';
      break;
    case chainIds.RINKEBY:
      prefix = 'rinkeby.';
      break;
    case chainIds.HARDHAT:
      prefix = 'hardhat.';
      break;
    default:
      throw new UnsupportedChainError();
  }

  return prefix;
}

export function etherscanForTransaction(transactionHash: string): string {
  if (transactionHash) {
    return `https://${etherscanPrefix(defaultChainId)}etherscan.io/tx/${transactionHash}`;
  } else {
    return '';
  }
}

export function etherscanForContract(contractAddress: string): string {
  if (contractAddress) {
    return `https://${etherscanPrefix(defaultChainId)}etherscan.io/token/${contractAddress}`;
  } else {
    return '';
  }
}

export function etherscanForAddress(userAddress: string): string {
  if (userAddress) {
    return `https://${etherscanPrefix(defaultChainId)}etherscan.io/address/${userAddress}`;
  } else {
    return '';
  }
}

export function etherscanForToken(contractAddress: string, tokenId: string): string {
  if (contractAddress && tokenId) {
    return `${etherscanForContract(contractAddress)}?a=${tokenId}`;
  }

  return '';
}

export function artistMetaDataURI(artistId: string) {
  return `${metadataBaseURI}${artistId}/`;
}

// provider.request returns Promise<any>, but wallet_switchEthereumChain must return null or throw
// null is returned if the active chain was switched, and an error otherwise
// see https://github.com/rekmarks/EIPs/blob/3326-create/EIPS/eip-3326.md for more info on wallet_switchEthereumChain
export async function ensureNetworkMatches(library: Web3Provider): Promise<boolean> {
  if (!library?.provider?.request || !library?.getNetwork) {
    return false;
  }

  const libraryChainId = (await library.getNetwork()).chainId;

  if (libraryChainId === defaultChainId) {
    return true;
  }

  const formattedChainId = hexValue(defaultChainId);
  try {
    await library.provider.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: formattedChainId }],
    });
    // force reinitiating transactions since library switching of chains is unreliable
    return false;
  } catch (err: any) {
    console.error(err);
  }

  return false;
}

///////////// MISC UTILITY HELPERS

export const shortenHash = (hash: string = '', charLength: number = 6, postCharLength?: number) => {
  let shortendHash;
  if (postCharLength) {
    shortendHash =
      hash.slice(0, charLength) + '...' + hash.slice(hash.length - postCharLength, hash.length);
  } else {
    shortendHash = hash.slice(0, charLength);
  }
  return shortendHash;
};

export function validSpotifyUrl(value: string) {
  return value.startsWith(SPOTIFY_BASE_URL);
}

// from https://stackoverflow.com/a/39084354/9202501
export function validInstagramHandle(value: string) {
  return /^([A-Za-z0-9_](?:(?:[A-Za-z0-9_]|(?:\.(?!\.))){0,28}(?:[A-Za-z0-9_]))?)$/.test(value);
}

export function validOpenseaHandle(value: string) {
  return value.startsWith(OPENSEA_BASE_URL);
}

export function sortReleasesByCreatedAt<T extends Pick<Release, 'createdAt'>>(releases: T[]) {
  return [...releases].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  );
}

// Upcoming releases are sorted by ascencing mint startTime (closest next release)
// Past releases are sorted by descending mint startTime
export function sortUpcomingAndPastTracks<Node extends { mintInfo?: { startTime: number } | null }>(
  tracks: Node[],
) {
  function getMintInfoStartTime(value: { mintInfo?: { startTime: number } | null }) {
    const mintInfo = value.mintInfo;

    if (!mintInfo) throw Error('Mint Info could not be found!');

    return mintInfo.startTime;
  }
  const upcoming = tracks
    .filter(r => getMintInfoStartTime(r) * 1000 > Date.now())
    .sort((a, b) => getMintInfoStartTime(a) - getMintInfoStartTime(b));

  const past = tracks
    .filter(r => getMintInfoStartTime(r) * 1000 <= Date.now())
    .sort((a, b) => getMintInfoStartTime(b) - getMintInfoStartTime(a));

  return [...upcoming, ...past];
}

// Validates image is above minimum dimensions
export function validateImageDimensions(
  file: File,
  requiredMinH: number = 0,
  requiredMinW: number = 0,
) {
  return new Promise((resolve: (respose: boolean) => void) => {
    const img = new Image();
    img.src = URL.createObjectURL(file);
    img.onload = () => {
      const { height, width } = img;
      if (height < requiredMinH || width < requiredMinW) {
        resolve(false);
      }
      resolve(true);
    };
  });
}

export function validateImageAspectRatio(file: File, ratio: number) {
  return new Promise((resolve: (respose: boolean) => void) => {
    const img = new Image();
    img.src = URL.createObjectURL(file);
    img.onload = () => {
      const { height, width } = img;
      if (width / height !== ratio) {
        resolve(false);
      }
      resolve(true);
    };
  });
}

export function formatTimeDuration({
  startTime,
  endTime,
}: {
  startTime: Maybe<string>;
  endTime: Maybe<string>;
}) {
  if (!startTime || !endTime) {
    return;
  }

  const duration = intervalToDuration({
    start: new Date(startTime),
    end: new Date(endTime),
  });

  const formattedDuration = formatDuration(duration, { delimiter: ', ' });

  return formattedDuration;
}
