import { ReactNode } from "react";
import Header from "./Header";

interface ILayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <main className="bg-gray-50 min-h-screen">
      <Header />
      <section className="">{children}</section>
    </main>
  );
};

export default Layout;
