import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";
import { ILayoutProps } from "@/interfaces/props/ILayoutProps";
import useCoursesStore from "@/store/useCourses";
import { api } from "@/common/API";
import { useEffect } from "react";

const Layout = ({ children, className, title = "" }: ILayoutProps) => {
  const { courses, setCourses } = useCoursesStore();

  useEffect(() => {
    courses.length == 0 &&
      api.get("front/courses").then((res) => setCourses(res.data.data));
  }, []);

  return (
    <main className="bg-gray-50 min-h-screen">
      <Head>
        <title>GM-Dream Team</title>
        <meta
          name="description"
          content="Build Bridges, Make a Difference as a Grant Expert!"
        />
      </Head>
      <Header />
      <section className={`${className}`}>{children}</section>
      <Footer />
    </main>
  );
};

export default Layout;
