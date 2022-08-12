import { ReactElement } from 'react';
import { Footer, Header, BackTop } from '@src/components/ui';

type LayoutProps = Required<{
  readonly children: ReactElement
}>

export const Layout = ({ children }: LayoutProps) => (
  <>
    <Header />
    {children}
    <BackTop />
    <Footer />
  </>
)