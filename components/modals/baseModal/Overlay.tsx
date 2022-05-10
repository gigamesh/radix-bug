import { DialogOverlay } from '@radix-ui/react-dialog';
import { keyframes, styled } from '@stitches-config';

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

export const Overlay = styled(DialogOverlay, {
  backgroundColor: 'rgb(0, 0, 0, 0.5)',
  position: 'fixed',
  inset: 0,
  zIndex: 3,
  backdropFilter: 'blur(6px)',
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
});
