import { PropsWithChildren } from 'react';
import Footer from './footer';
import Header from './header';

const SiteLayout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <>
      <Header />
      <main className="pt-[112px]">{children}</main>
      <Footer />
    </>
  );
};

export default SiteLayout;
