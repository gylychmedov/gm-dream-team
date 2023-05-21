import Layout from "@/components/Layout/Layout";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>GM dream team</title>
        <meta name="description" content="GM dream team" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>Home page</Layout>
    </>
  );
}
