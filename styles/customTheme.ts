import { extendTheme, theme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';
import { StepsStyleConfig as Steps } from 'chakra-ui-steps';

const lgContainerPadding = ['1rem', '1.25rem', '1.5rem', null, '2rem'];

if (typeof window !== 'undefined') {
  // In case chakra has color mode stored
  window.localStorage.setItem('chakra-ui-color-mode', 'light');
}

/* IMPORTANT: most of these variables are Chakra's defaults: https://chakra-ui.com/docs/theming/theme
and duplicated in stitches.config.ts. Eventually we'll be removing Chakra, but for the time-being,
if you make any changes to the theme variables in this file or stitches.config.ts, please make sure to change in the other
*/

const customTheme = extendTheme({
  breakpoints: createBreakpoints({
    sm: '768px',
    md: '1024px',
    lg: '1160px',
    xl: '1440px',
    '2xl': '1920px',
  }),
  fonts: {
    ...theme.fonts,
    heading: 'Druk Wide Cy, serif',
    body: 'AUTHENTIC Sans, sans-serif',
    mono: 'NB Architekt Neue, sans-serif',
  },
  styles: {
    global: {
      body: {
        bg: 'grey.100',
        color: 'grey.900',
      },
      button: {
        _focus: {
          outlineColor: 'brandAccent.100',
          boxShadow: 'none !important',
        },
      },
      a: {
        _focus: {
          outlineColor: 'brandAccent.100',
          boxShadow: 'none',
        },
      },
    },
  },
  colors: {
    ...theme.colors,
    grey: {
      100: '#F3F4F6',
      200: '#E5E6EB',
      300: '#D2D5D9',
      400: '#9DA3AE',
      500: '#6D7180',
      600: '#4D5562',
      700: '#394150',
      800: '#192024',
      900: '#192024',
    },
    brandAccent: {
      20: '#E5F3F0',
      40: '#D5F0E9',
      60: '#C3ECE2',
      80: '#B2E9DB',
      100: '#A1E6D5',
    },
  },
  radii: {
    none: '0',
    sm: '2px',
    base: '4px',
    md: '6px',
    lg: '8px',
    xl: '12px',
    '2xl': '16px',
    '3xl': '24px',
    full: '9999px',
  },
  shadows: {
    xl: '0px -2px 32px rgba(196, 193, 190, 0.24)',
    '2xl': '0px -15px 60px rgba(0, 0, 0, 0.08)',
    '3xl': '0px -2px 56px 0px rgba(196, 193, 190, 0.24)',
  },
  components: {
    Steps,
    Modal: {
      baseStyle: {
        dialog: {
          borderRadius: '2xl',
          mb: ['0', 'initial'],
          pb: ['50px', 'initial'],
        },
        header: {
          fontFamily: 'heading',
          fontSize: ['0.875rem', null, '1.125rem'],
          textAlign: 'center',
          position: 'relative',
          borderBottomWidth: '1px',
          py: '1.5rem',
          px: 10,
        },
        body: {
          py: 8,
          px: [4, 6],
        },
        closeButton: {
          top: '50%',
          right: '1rem',
          transform: 'translateY(-50%)',
          borderRadius: 'full',
          py: '0.5rem',
          px: 0,
          _hover: {
            bg: 'brandAccent.20',
          },
          _focus: {
            outlineColor: 'brandAccent.100',
            outlineWidth: '4px',
          },
        },
        overlay: {
          backdropFilter: 'blur(4px)',
          background: 'rgba(0, 0, 0, 0.4)',
        },
      },
      sizes: {
        md: {
          Content: {
            maxWidth: '600px',
          },
        },
      },
      variants: {
        fixToBottom: {
          dialogContainer: {
            alignItems: ['flex-end', 'center'],
          },
        },
      },
    },
    Text: {
      baseStyle: {
        fontFamily: 'AUTHENTIC Sans',
        color: 'grey.900',
        fontWeight: 'normal',
        mb: '1rem',
      },
      variants: {
        bold: {
          fontWeight: 'bold',
        },
        label: {
          fontFamily: 'NB Architekt Neue',
          textTransform: 'uppercase',
        },
        labelBold: {
          fontFamily: 'NB Architekt Neue',
          textTransform: 'uppercase',
          fontWeight: 'bold',
        },
        bigAndBold: {
          fontWeight: 600,
          whiteSpace: 'pre',
          margin: '0',
        },
      },
      sizes: {
        xs: {
          fontSize: '0.75rem',
          lineHeight: '1em',
        },
        sm: {
          fontSize: '0.875rem',
          lineHeight: '1.25rem',
        },
        md: {
          fontSize: '1rem',
          lineHeight: '1.5rem',
        },
        lg: {
          fontSize: '1.125rem',
          lineHeight: '1.5rem',
        },
        xl: {
          fontSize: '1.125rem',
          lineHeight: '2.125rem',
        },
        '2xl': {
          fontWeight: 'normal',
          fontSize: '1.5rem',
          lineHeight: '2rem',
          letterSpacing: '-0.02em',
        },
        '3xl': {
          fontWeight: 'normal',
          fontSize: ['1.5rem', null, '1.625rem'],
          lineHeight: '2rem',
          letterSpacing: '-0.02em',
        },
      },
    },
    Heading: {
      baseStyle: {
        letterSpacing: '-0.02em',
      },
      sizes: {
        xl: {
          fontWeight: 'normal',
          fontSize: '1.25rem',
          lineHeight: '2.5rem',
          letterSpacing: '-0.02em',
          mb: '1rem',
        },
        '2xl': {
          fontWeight: 'bold',
          fontSize: '1.5rem',
          lineHeight: '2.5rem',
        },
        '4xl': {
          fontWeight: 'normal',
          fontSize: ['1.5rem', null, '2rem'],
          lineHeight: ['2rem', null, '2.5rem'],
          letterSpacing: '-0.02em',
        },
      },
      variants: {
        modal: {
          borderBottomWidth: '1px',
          textAlign: 'center',
          fontSize: '1.125rem',
          padding: '1.25rem',
          position: 'relative',
        },
      },
    },
    Container: {
      sizes: {
        lg: {
          maxWidth: ['700px', '920px', null, null, '1160px'],
          // need to repeat x and y values so they can be individually overridden
          py: lgContainerPadding,
          px: lgContainerPadding,
        },
        full: {
          maxWidth: '1440px',
        },
        infinite: {
          maxWidth: 'none',
          px: lgContainerPadding,
        },
      },
      variants: {
        songPlayer: {
          maxWidth: ['400px', null, null, null, '1160px'],
          px: lgContainerPadding,
        },
      },
    },
    Box: {
      variants: {
        xPadded: {
          px: lgContainerPadding,
        },
      },
    },
    Button: {
      defaultProps: {
        size: 'md',
      },
      baseStyle: {
        transition: 'all 200ms',
        lineHeight: '1.5rem',
        borderRadius: '2xl',
        py: '1.25rem',
        rightIcon: {
          marginRight: 8,
        },
        fontWeight: '400',
        _focus: {
          outlineWidth: '4px',
        },
      },
      sizes: {
        md: {
          height: 'auto',
          py: ['0.75rem', null, '1.25rem'],
          fontSize: ['1rem', null, '1.125rem'],
          paddingLeft: ['2rem', null, '3rem'],
          paddingRight: ['2rem', null, '3rem'],
        },
        md1: {
          py: ['0.5rem', null, '.95rem'],
          fontSize: ['.95rem', null, '.95rem'],
          width: '180px',
          height: '56px',
        },
        sm: {
          height: 'auto',
          py: '0.75rem',
          fontSize: '1rem !important',
          paddingLeft: '2rem !important',
          paddingRight: '2rem !important',
        },
        sm2: {
          height: 'auto',
          py: '.4rem',
          fontSize: '.8rem !important',
          paddingLeft: '1rem !important',
          paddingRight: '1rem !important',
        },
        xs: {
          height: 'auto',
          py: '0.3rem',
          fontSize: '0.75rem !important',
          paddingLeft: '1rem',
          paddingRight: '1rem',
        },
      },
      variants: {
        nav: {
          fontSize: '1.2rem',
          bg: 'transparent !important',
          color: 'grey.900',
          fontWeight: 300,
          py: 1,
          px: '1rem !important',
          textDecoration: 'none !important',
          _hover: {
            color: 'brandAccent.80',
          },
        },
        icon: {
          color: 'grey.900',
          borderRadius: 'full',
          _hover: {
            bg: 'brandAccent.20',
          },
          _focus: {
            outlineWidth: '4px',
            outlineColor: 'brandAccent.100',
            boxShadow: 'none',
          },
        },
        primary: {
          bgColor: 'brandAccent.100',
          _hover: {
            bgColor: 'brandAccent.60',
            _disabled: {
              bgColor: 'brandAccent.60',
            },
          },
          _focus: {
            bgColor: 'brandAccent.100',
            outlineColor: 'brandAccent.100',
            boxShadow: '0 0 0 2px #4D5562',
          },
          _active: {
            bgColor: 'brandAccent.100',
          },
          _disabled: {
            bgColor: 'brandAccent.60',
            opacity: 0.4,
          },
        },
        secondary: {
          bgColor: 'grey.900',
          color: '#fff',
          _hover: {
            bgColor: 'grey.600',
            _disabled: {
              bgColor: 'grey.900',
            },
          },
          _focus: {
            bgColor: 'grey.900',
            outlineColor: 'brandAccent.100',
            boxShadow: '0 0 0 2px #4D5562',
          },
          _active: {
            bgColor: 'grey.900',
          },
          _disabled: {
            opacity: 0.4,
          },
        },
        tertiary: {
          bgColor: 'grey.100',
          borderColor: 'grey.100',
          borderWidth: '2px',
          _hover: {
            borderColor: 'grey.900',
            _disabled: {
              bgColor: 'grey.100',
            },
          },
          _focus: {
            bgColor: 'grey.100',
            outlineColor: 'brandAccent.900',
            borderColor: 'brandAccent.100',
            boxShadow: '0 0 0 2px #4D5562',
          },
          _disabled: {
            opacity: 0.4,
          },
        },
        danger: {
          color: '#fff',
          bgColor: '#EB2D44',
          textTransform: 'uppercase',
          _hover: {
            bgColor: '#f3818f',
          },
          _focus: {
            bgColor: '#f3818f',
            boxShadow: '0 0 0 2px #4D5562',
          },
          _disabled: {
            opacity: 0.4,
          },
        },
      },
    },
    Input: {
      variants: {
        default: {
          field: {
            borderRadius: '2xl',
            borderWidth: '1px',
            borderColor: 'grey.200',
            height: '3.375rem',
            outlineOffset: 0,
            ':focus': {
              outlineWidth: '2px',
              outlineColor: 'brandAccent.100',
            },
            _disabled: {
              opacity: 0.4,
            },
          },
        },
      },
      defaultProps: {
        variant: 'default',
      },
    },
    FormLabel: {
      baseStyle: {
        fontFamily: 'heading',
        fontSize: '0.8rem',
      },
    },
    Divider: {
      baseStyle: {
        mt: '2rem',
        mb: '2rem',
      },
    },
  },
});

export { customTheme as theme };

export default customTheme;
