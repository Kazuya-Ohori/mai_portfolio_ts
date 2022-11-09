import { ReactElement } from "react";
import { Footer, Header, BackTop } from "@/components/ui";
import { CategoriesProvider } from "@/context/categoriesContext";

type LayoutProps = Required<{
  readonly children: ReactElement;
}>;

export const Layout = ({ children }: LayoutProps) => (
  <>
    <Header />
    {children}
    <BackTop />
    <Footer />
  </>
);
