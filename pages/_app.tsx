import '../styles/globals.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import { GlobalModalNew } from '@components/modals/GlobalModalNew';
import { ModalContext } from '@context/modal';
import React from 'react';

import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps, ...rest }: AppProps) {
  return (
    <ModalContext.Provider>
      <GlobalModalNew />
      <Component {...pageProps} {...rest}></Component>
    </ModalContext.Provider>
  );
}
