import { ReactNode } from 'react';
import type { AppProps, NextAppProps } from 'next/app';

import SiteLayout from 'layout/SiteLayout';
import '../styles/globals.css';

function getDefaultLayout(children: ReactNode) {
  return <SiteLayout>{children}</SiteLayout>;
}

function MyApp(props: NextAppProps) {
  const { Component, pageProps } = props;

  const renderAppLayout = () => {
    const children = <Component {...pageProps} />;
    const { getLayout = getDefaultLayout } = Component.pageOptions || {};

    return getLayout(children);
  };

  return renderAppLayout();
}

export default MyApp;
