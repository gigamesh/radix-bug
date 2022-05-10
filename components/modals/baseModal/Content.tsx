import { Content as DialogContent, Portal } from '@radix-ui/react-dialog';
import { keyframes, styled } from '@stitches-config';

import { Overlay } from './Overlay';

// Sizes copied from https://github.com/chakra-ui/chakra-ui/blob/main/packages/theme/src/foundations/sizes.ts
const modalSizeMap = {
  '3xs': '224px',
  '2xs': '256px',
  xs: '320px',
  sm: '384px',
  md: '448px',
  lg: '512px',
  xl: '576px',
  '2xl': '672px',
  '3xl': '768px',
  '4xl': '896px',
  '5xl': '950px',
  '6xl': '1024px',
  '7xl': '1152px',
  '8xl': '1280px',
};

export const Content: React.FC<React.ComponentProps<typeof StyledContent> & { size?: string }> = ({
  children,
  size = 'md',
  ...props
}) => {
  const maxWidth = modalSizeMap[size as keyof typeof modalSizeMap];

  return (
    <Portal>
      <Overlay />
      <StyledContent css={{ maxWidth }} {...props}>
        {children}
      </StyledContent>
    </Portal>
  );
};

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
});

const StyledContent = styled(DialogContent, {
  bottom: '0',
  width: '100vw',
  backgroundColor: 'white',
  borderRadius: 20,
  position: 'fixed',
  maxHeight: '100vh',
  paddingBottom: '10px',
  zIndex: 6,
  '@tablet': {
    top: '50%',
    left: '50%',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    width: '90vw',
    maxWidth: '450px',
    '@media (prefers-reduced-motion: no-preference)': {
      animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
    },
  },
  '&:focus': { outline: 'none' },
});
