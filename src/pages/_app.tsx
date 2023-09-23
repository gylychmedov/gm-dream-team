import "@/styles/tailwind.css";
import "swiper/css";
import type { AppProps } from "next/app";
import Watcher from "@/components/Elements/Watcher";
import Head from "next/head";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/logo.png" />
      </Head>
      <Watcher />
      <Component {...pageProps} />
    </>
  );
};

export default App;
