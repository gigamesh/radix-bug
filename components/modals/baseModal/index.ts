import { styled } from '@stitches-config';

export { Content } from './Content';
export { ModalHeader } from './ModalHeader';
export { Overlay } from './Overlay';
export { CloseButton } from './CloseButton';

export const ModalBody = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: '1.5rem 1.25rem',

  variants: {
    variant: {
      captcha: {
        padding: '1.5rem 1.25rem 4.5rem',
        '@tablet': {
          padding: '1.5rem 2.5rem',
        },
      },
    },
  },
});
