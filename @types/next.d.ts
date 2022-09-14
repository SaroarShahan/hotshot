import { ReactNode } from 'react';
import { NextComponentType, NextPageContext } from 'next';
import { AppProps } from 'next/app';

type PageOptions = {
  getLayout?: (page: ReactNode) => ReactNode;
  redirectIfAuthenticated?: boolean;
  requiresAuth?: boolean;
  requiredPermissions?: string | string[];
};

type PageComponent<P = {}> = NextComponentType<NextPageContext, {}, P> & {
  pageOptions?: PageOptions;
};

declare module 'next' {
  type NextPageOptions = PageOptions;
  type NextPageComponent<P = {}> = PageComponent<P>;
}

declare module 'next/app' {
  type NextAppProps<P = {}> = AppProps<P> & { Component: PageComponent };
}
