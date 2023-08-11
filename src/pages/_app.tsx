import "@/styles/tailwind.css";
import "swiper/css";
import type { AppProps } from "next/app";
import Watcher from "@/components/Elements/Watcher";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Watcher />
      <Component {...pageProps} />
    </>
  );
};

export default App;
