import Courses from "@/components/Courses/Courses";
import Banner from "@/components/Home/Banner";
import Subscribe from "@/components/Home/Subscribe";
import Layout from "@/components/Layout/Layout";
import Services from "@/components/Services/Services";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="description" content="GM dream team" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout title="Home">
        <Banner />
        <Courses />
        {/* <Teams /> */}
        <Services />
        <Subscribe />
      </Layout>
    </>
  );
}
