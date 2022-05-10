import { Content } from '@components/modals/baseModal';
import { ModalContentState, ModalContext, ModalType } from '@context/modal';
import { Portal, Root } from '@radix-ui/react-dialog';
import React from 'react';

// THIS SHOULD ONLY BE USED FOR RADIX MODALS. TODO: REMOVE THIS COMMENT WHEN REFACTOR IS COMPLETE

// TODO: Remove when the chakra -> radix refactor is complete
export const radixModals = [
  ModalType.ALERT,
  ModalType.TWITTER_ID_VERIFY,
  ModalType.DEPLOY_ARTIST,
  ModalType.AUCTION_MODAL,
  ModalType.QUEUE,
  ModalType.JOIN_QUEUE,
  ModalType.DEPLOY_SPLIT,
  ModalType.COLLECTORS,
  ModalType.CAPTCHA,
  ModalType.NEW_MINT_RELEASE_CONFIRMATION,
  ModalType.IMAGE_VIEW,
  ModalType.BUY_NFT,
  ModalType.SHARE_TO_SOCIAL,
];

const defaultSizes = {
  [ModalType.ALERT]: 'md',
  [ModalType.CAPTCHA]: 'sm',
  [ModalType.SET_TIMESLOT]: 'xl',
  [ModalType.SET_COMMENT]: 'xl',
  [ModalType.DEPLOY_SPLIT]: '5xl',
  [ModalType.COLLECTORS]: '3xl',
  [ModalType.IMAGE_VIEW]: 'md',
  [ModalType.BUY_NFT]: '3xl',
};

const nullBody = { body: null };

export function GlobalModalNew() {
  const { modalContent, activeModal, closeModal, onCloseRef } = ModalContext.useContainer();

  const onClose = React.useCallback(
    (isOpen: boolean) => {
      if (isOpen) {
        return;
      }

      closeModal();
      if (onCloseRef.current) {
        onCloseRef.current();
        onCloseRef.current = null;
      }
    },
    [closeModal, onCloseRef],
  );

  const [activeContent, setActiveContent] = React.useState<ModalContentState>(nullBody);

  React.useEffect(() => {
    if (activeModal === null) return;

    setActiveContent(
      previousContent => (modalContent && modalContent[activeModal]) || previousContent,
    );
  }, [activeModal, setActiveContent, modalContent]);

  const isOpen =
    activeModal !== null &&
    activeModal in modalContent &&
    // TODO: Remove this when the chakra -> radix refactor is complete
    radixModals.includes(activeModal);

  const size =
    activeContent.modalProps?.size ||
    defaultSizes[activeModal as keyof typeof defaultSizes] ||
    'md';

  return (
    <Root open={isOpen} onOpenChange={onClose}>
      <Portal>
        <Content size={size}>{activeContent.body}</Content>
      </Portal>
    </Root>
  );
}
