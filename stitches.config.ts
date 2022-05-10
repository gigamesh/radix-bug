import { createStitches } from '@stitches/react';

import type * as Stitches from '@stitches/react';

// https://adamwathan.me/dont-use-em-for-media-queries/
// Pixels are the only unit that behave consistently across all commonly used browsers.
export const mediaQueries = {
  mobile: '(min-width: 340px)',
  tablet: '(min-width: 768px)',
  tabletLandscape: '(min-width: 1024px)',
  laptop: '(min-width: 1160px)',
  desktop: '(min-width: 1440px)',
  desktopLg: '(min-width: 1920px)',
  touch: '(pointer: coarse)',
  darkMode: '(prefers-color-scheme: dark)',
  prefersReducedMotion: '(prefers-reduced-motion: reduce)',
};

/* IMPORTANT: most of these variables are copied from Chakra's defaults: https://chakra-ui.com/docs/theming/theme
and some are explicitly defined in customTheme.ts. Eventually we'll be removing Chakra, but for the time-being,
if you make any changes to the theme variables in this file or customTheme.ts, please make sure tochange in the other
*/
export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } =
  createStitches({
    theme: {
      fonts: {
        heading: 'Druk Wide Cy, serif',
        body: 'AUTHENTIC Sans, sans-serif',
        mono: 'NB Architekt Neue, sans-serif',
      },
      colors: {
        white: '#fff',
        black: '#0E1213',
        blue400: '#4299E1',
        grey100: '#F3F4F6',
        grey200: '#E5E6EB',
        grey300: '#D2D5D9',
        grey400: '#9DA3AE',
        grey500: '#6D7180',
        grey600: '#4D5562',
        grey700: '#394150',
        grey800: '#192024',
        grey900: '#1A1B22',
        brandAccent20: '#E5F3F0',
        brandAccent40: '#D5F0E9',
        brandAccent60: '#C3ECE2',
        brandAccent80: '#B2E9DB',
        brandAccent100: '#A1E6D5',
        danger100: '#e53e3e',
        danger200: '#d32f2f',
      },
      radii: {
        small: '0.25rem',
        medium: '0.5rem',
        large: '1rem',
      },
      shadows: {
        brandAccent50: '0px 0px 20px rgba(161, 230, 213, 0.5)',
      },
    },
    media: mediaQueries,
    utils: {
      heading: (value: string): any => {
        switch (value) {
          case 'h1':
            return {
              fontFamily: '$heading',
              fontSize: '1.25rem',
              fontWeight: '400',
              lineHeight: '2rem',
              letterSpacing: '-2%',
              color: '$black',
              '@tablet': {
                fontSize: '1.125rem',
                lineHeight: '1.5rem',
                fontWeght: '800',
              },
              '@desktop': {
                fontSize: '1.75rem',
                lineHeight: '2.5rem',
              },
            };

          case 'h2':
            // eth price
            return {
              fontFamily: '$body',
              fontSize: '1.5rem',
              fontWeight: '600',
              lineHeight: '1.75rem',
              color: '$black',
              letterSpacing: '-2%',
              textTransform: 'uppercase',
              '@tablet': {
                fontSize: '1.25rem',
              },
            };

          case 'h3':
            // 'maverick city'
            return {
              fontFamily: '$body',
              fontSize: '1rem',
              fontWeight: '700',
              lineHeight: '1.5rem',
              color: '$black',
              '@desktop': {
                fontSize: '0.875rem',
                lineHeight: '1.25rem',
              },
            };

          case 'h4':
            // 'the golden egg'
            return {
              fontFamily: '$body',
              fontSize: '1rem',
              fontWeight: '600',
              lineHeight: '1.5rem',
              color: '$black',
            };

          case 'h5':
            // 'contract address'
            return {
              fontFamily: '$body',
              fontSize: '0.75rem',
              fontWeight: '700',
              lineHeight: '1rem',
              color: '$grey400',
              textTransform: 'uppercase',
              '@tablet': {
                fontSize: '0.625rem',
              },
            };

          default:
            console.warn('A value has been omitted for: utils.heading');
            break;
        }
      },
      // paddings
      paddingX: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
        paddingLeft: value,
        paddingRight: value,
      }),
      paddingY: (value: Stitches.PropertyValue<'paddingTop'>) => ({
        paddingTop: value,
        paddingBottom: value,
      }),
      // margins
      marginX: (value: Stitches.PropertyValue<'marginLeft'>) => ({
        marginLeft: value,
        marginRight: value,
      }),
      marginY: (value: Stitches.PropertyValue<'marginTop'>) => ({
        marginTop: value,
        marginBottom: value,
      }),
      // other
      size: (value: Stitches.PropertyValue<'width'>) => ({
        width: value,
        height: value,
      }),
    },
  });
