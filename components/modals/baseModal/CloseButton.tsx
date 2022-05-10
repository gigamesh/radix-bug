import { ModalContext } from '@context/modal';
import { X } from 'react-feather';

export const CloseButton = ({}: {}) => {
  const { closeModal } = ModalContext.useContainer();

  return (
    <button>
      <X onClick={closeModal} />
    </button>
  );
};
