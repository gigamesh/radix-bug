import { CaptchaModal } from '@components/modals/CaptchaModal';
import { ModalContext, ModalType } from '@context/modal';
import React from 'react';

export default function CaptchaWrapper() {
  const { openModal } = ModalContext.useContainer();

  React.useEffect(() => {
    openModal(ModalType.CAPTCHA, {
      body: (
        <CaptchaModal
          releaseId={"1234"}
          openBuyModal={() => {}}
          presaleId={"1234"}
        />
      ),
    });
  }, [openModal]);

  return null;
}
