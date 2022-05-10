import Script from 'next/script';
import { isMainSoundxyzSite } from './constants';

export const logEvent = {
  buttonClick: (
    page: 'SongPage' | 'ArtistPage' | 'PresalePage',
    buttonType: 'PlayButton' | 'BuyButton',
  ) => typeof umami !== 'undefined' && umami(`${page}: ${buttonType}`),
};

const umamiWebsiteId = isMainSoundxyzSite
  ? 'a396a63f-7f88-4134-a35a-25962d7a2ba0'
  : '5c1bfe0a-58ef-4f5b-8f0c-e6bda4e2ec67';
const umamiScriptUrl = isMainSoundxyzSite
  ? 'https://data.sound.xyz/register.js'
  : 'https://staging.data.sound.xyz/register.js';

export const UmamiScript = (
  <Script src={umamiScriptUrl} data-website-id={umamiWebsiteId} strategy="afterInteractive" />
);
