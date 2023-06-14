import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

interface ILayoutProps {
  children: ReactNode;
  title: string;
  className?: string;
}

const Layout = ({ children, className, title }: ILayoutProps) => {
  return (
    <main className="bg-gray-50 min-h-screen">
      <Head>
        <title>{title} - GM dream</title>
      </Head>
      <Header />
      <section className={`${className}`}>{children}</section>
      <Footer />
    </main>
  );
};

export default Layout;
