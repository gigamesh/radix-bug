import HCaptcha from '@hcaptcha/react-hcaptcha';
import { styled } from '@stitches-config';
import React, { useEffect, useRef } from 'react';

import { ModalBody, ModalHeader } from './baseModal';

const HCAPTCHA_SITE_KEY = "0a7eb5c7-6254-4ac8-bc85-11f3ccf82377";

import type { Maybe } from "@utils/helpers";

type CaptchaModalProps = {
  releaseId: string;
  openBuyModal: () => void;
  presaleId: Maybe<string>;
};

export const CAPTCHA_LOADING_ERROR_TEXT =
  "There was a problem loading the CAPTCHA. Please try again.";

export const CAPTCHA_VERIFICATION_ERROR_TEXT =
  "There was a problem validating the CAPTCHA. Please try again.";

export function CaptchaModal(props: CaptchaModalProps) {
  const hcaptchaRef: any = useRef();

  useEffect(() => {
    if (!HCAPTCHA_SITE_KEY) {
      alert("missing hcaptcha site key");
    }
  }, []);

  const handleCaptchaChange = (captchaCode: string | null) => {
    console.log("success!");
  };

  return (
    <>
      <ModalHeader title={"Proof of Humanity"} />
      <ModalBody variant="captcha">
        <ModalWrapper>
          <Text>
            <p>Only humans can buy music NFTs</p>
          </Text>
          {HCAPTCHA_SITE_KEY ? (
            <CaptchaContainer>
              <HCaptcha
                ref={hcaptchaRef}
                sitekey={HCAPTCHA_SITE_KEY}
                onVerify={handleCaptchaChange}
              />
            </CaptchaContainer>
          ) : null}
        </ModalWrapper>
      </ModalBody>
    </>
  );
}

const ModalWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: 100,
  paddingBottom: 20,
  "@tablet": {
    height: 150,
  },
});

const Text = styled("div", {
  backgroundColor: "$grey100",
  paddingY: 15,
  textAlign: "left",
  paddingLeft: 15,
  fontSize: 13,
  borderRadius: 14,
  color: "$grey500",
  marginBottom: 20,
});

const CaptchaContainer = styled("div", {
  border: "1.75px solid $grey200",
  borderRadius: "18px",
  width: "100%",
  iframe: {
    borderRadius: "20px",
    width: "300px !important",
    height: "75px !important",
    marginTop: -1.2,
    marginLeft: -1.4,
    right: "1px",
    bottom: "4px",
    div: {
      color: "red",
    },
  },
});
