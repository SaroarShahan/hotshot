import { PropsWithChildren } from 'react';
import Footer from './footer';
import Header from './header';

const SiteLayout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default SiteLayout;
