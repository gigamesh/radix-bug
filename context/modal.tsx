import Router from 'next/router';
import React from 'react';
import { createContainer } from 'unstated-next';

import type {
  ModalContentProps,
  ModalOverlayProps,
  ModalProps,
} from "@chakra-ui/react";

export enum ModalType {
  "AUCTION_MODAL" = "AUCTION_MODAL",
  "ALERT" = "ALERT",
  "LIVE_RELEASE_PARTY" = "LIVE_RELEASE_PARTY",
  "LOG_IN" = "LOG_IN",
  "BUY_NFT" = "BUY_NFT",
  "IMAGE_CROP" = "IMAGE_CROP",
  "IMAGE_UPLOAD" = "IMAGE_UPLOAD",
  "IMAGE_VIEW" = "IMAGE_VIEW",
  "TWITTER_ID_VERIFY" = "TWITTER_ID_VERIFY",
  "DEPLOY_ARTIST" = "DEPLOY_ARTIST",
  "SET_TIMESLOT" = "SET_TIMESLOT",
  "SET_COMMENT" = "SET_COMMENT",
  "PROCESSING" = "PROCESSING",
  "SHARE_TO_SOCIAL" = "SHARE_TO_SOCIAL",
  "MINT_RELEASE" = "MINT_RELEASE",
  "MINT_RELEASE_CONFIRMATION" = "MINT_RELEASE_CONFIRMATION",
  "NEW_MINT_RELEASE_CONFIRMATION" = "NEW_MINT_RELEASE_CONFIRMATION",
  "PRE_MINT" = "PRE_MINT",
  "DEPLOY_SPLIT" = "DEPLOY_SPLIT",
  "WITHDRAW_FUNDS" = "WITHDRAW_FUNDS",
  "WITHDRAW_FUNDS_MULTIPLE" = "WITHDRAW_FUNDS_MULTIPLE",
  "EDIT_ARTIST_DESCRIPTION" = "EDIT_ARTIST_DESCRIPTION",
  "EDIT_ARTIST_SPOTIFY_URL" = "EDIT_ARTIST_SPOTIFY_URL",
  "EDIT_ARTIST_OPENSEA_HANDLE" = "EDIT_ARTIST_OPENSEA_HANDLE",
  "EDIT_ARTIST_INSTAGRAM_HANDLE" = "EDIT_ARTIST_INSTAGRAM_HANDLE",
  "COLLECTORS" = "COLLECTORS",
  "SIGN_AUTH" = "SIGN_AUTH",
  "QUEUE" = "QUEUE",
  "JOIN_QUEUE" = "JOIN_QUEUE",
  "CAPTCHA" = "CAPTCHA",
}

type AugmentedModalProps = Omit<
  ModalProps,
  "isOpen" | "onClose" | "children" | "size"
> & {
  size?: string;
};
export type ModalContentState = {
  body: React.ReactNode;
  modalProps?: AugmentedModalProps | null;
  modalContentWrapperProps?: Omit<ModalContentProps, "children"> | null;
  modalOverlayProps?: ModalOverlayProps | null;
};

export type ModalContentStateDictionary = {
  [modalType in ModalType]?: ModalContentState;
};

function useModal() {
  const [activeModal, setActiveModal] = React.useState<ModalType | null>(null);
  const [nextModal, setNextModal] = React.useState<ModalType | null>(null);

  const onCloseRef = React.useRef<(() => void) | null>(null);

  const [modalContent, setModalContent] =
    React.useState<ModalContentStateDictionary>({});

  const openModal = React.useCallback(
    (modalType: ModalType, modalState?: ModalContentState) => {
      if (modalState) {
        setModalContent((current) => ({
          ...current,
          [modalType]: {
            ...modalState,
            modalProps: {
              isCentered: true,
              variant: "fixToBottom",
              ...modalState.modalProps,
            },
          },
        }));
      }
      setActiveModal(modalType);
    },
    [setActiveModal, setModalContent]
  );

  const closeModal = React.useCallback(() => {}, []);

  const closeCancelModal = React.useCallback(() => {}, []);

  const closeModalByType = React.useCallback(
    (type: ModalType) => {
      if (activeModal !== type) return;
      closeCancelModal();
    },
    [activeModal, closeCancelModal]
  );

  // If leaving the page, close the modal
  React.useEffect(() => {
    const handleRouteChange = (destination: string) => {
      /* need this extra guard because useRouterRefresh triggers routeChangeStart
       * for the route we're already on */
      if (destination !== Router.asPath) {
        closeModal();
      }
    };

    Router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      Router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [closeModal]);

  // Used for directing to buy modal after a successful login triggered from attempting to buy (for example)
  React.useEffect(() => {
    if (nextModal && activeModal === null) {
      setActiveModal(nextModal);
      setNextModal(null);
    }
  }, [activeModal, nextModal]);

  return {
    activeModal,
    modalContent,
    setModalContent,
    openModal,
    closeModal,
    closeCancelModal,
    closeModalByType,
    setNextModal,
    onCloseRef,
  };
}

export const ModalContext = createContainer(useModal);
