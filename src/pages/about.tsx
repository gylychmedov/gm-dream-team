import Layout from "@/components/Layout/Layout";
import Link from "next/link";
import { BsArrowRight, BsTwitter, BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useTranslation from "next-translate/useTranslation";

const AboutPage = () => {
  const { t } = useTranslation("about");
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout title="Contact" className="bg-white">
      <main className="grid grid-cols-12 gap-3 md:pt-5 md:pb-10 lg:gap-10 contain">
        <section className="col-span-12 md:col-span-6">
          <img
            src="/images/pages/about.png"
            alt=""
            className="w-full h-96 object-cover rounded-xl mt-10"
          />
        </section>
        <section className="col-span-12 md:col-span-6 flex items-start flex-col">
          <header className="col-span-12 flex flex-col pt-10 pb-8">
            <span className="text-teal-850 font-lato-bold">
              {t("navigation:about")}
            </span>
            <span className="text-gray-900 font-lato-bold text-3xl mt-3">
              GM-Dream Team
            </span>
          </header>
          <article
            onClick={() => setCollapsed(!collapsed)}
            className="border-l-2 pl-5 border-pink-650 text-teal-850 cursor-pointer"
          >
            {t("about_1")}

            {!collapsed && (
              <span className="ml-4 text-blue-500">
                {t("common:read_more")}
              </span>
            )}
          </article>
          <AnimatePresence>
            {collapsed && (
              <motion.div
                onClick={() => setCollapsed(!collapsed)}
                initial={{ height: 0, opacity: 0 }}
                exit={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                className="cursor-pointer"
              >
                <article className="border-l-2 pl-5 border-pink-650 text-teal-850 mt-3">
                  {t("about_2")}
                </article>

                <article className="border-l-2 pl-5 border-pink-650 text-teal-850 mt-3">
                  {t("about_3")}
                </article>

                <article className="border-l-2 pl-5 border-pink-650 text-teal-850 mt-3">
                  {t("about_4")}
                </article>
              </motion.div>
            )}
          </AnimatePresence>
          <Link
            href="/courses"
            className="flex-x mt-7 hover:scale-105 duration-500 bg-pink-650 px-5 py-3 text-base text-white rounded-md font-lato-bold shadow-xl shadow-pink-650/10"
          >
            <span>{t("common:explore_courses")}</span>
            <BsArrowRight />
          </Link>
        </section>
        <video
          className="col-span-12 bg-red-50 w-full rounded-xl shadow-xl shadow-gray-100"
          controls
          src="https://v4.cdnpk.net/videvo_files/video/free/video0464/large_watermarked/_import_611b5585777d85.29325813_FPpreview.mp4"
          poster="https://v4.cdnpk.net/videvo_files/video/free/video0464/thumbnails/_import_611b5585777d85.29325813_small.jpg?item_id=168852"
        />
      </main>
    </Layout>
  );
};

const Team = () => {
  return (
    <section className="grid grid-cols-12 gap-5 group">
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <aside
          key={item}
          className="col-span-12 sm:col-span-6 lg:col-span-4 relative group-hover:scale-90 group-hover:grayscale hover:!grayscale-0 group-hover:shadow-md hover:!shadow-2xl duration-500 hover:!scale-105  bg-gray-50 border border-gray-100 shadow-xl shadow-gray-100 rounded-2xl overflow-hidden"
        >
          <img
            src="https://img.freepik.com/free-photo/cute-smiling-young-man-with-bristle-looking-satisfied_176420-18989.jpg?w=740&t=st=1686874125~exp=1686874725~hmac=c760c4a284c72183088f0b43176bbc95166d2588c99fc947bd11369d857f1152"
            className="h-72 w-full object-cover hover:scale-110 duration-500"
            alt=""
          />
          <div className="flex flex-col p-5 relative">
            <div className="font-lato-bold text-lg">James Carlson</div>
            <div className="text-gray-600 text-base">Manager</div>
            <nav className="mt-5 flex gap-6 text-teal-850">
              <a
                href="/"
                rel="noreferrer"
                target="_blank"
                className="hover:opacity-75"
              >
                <AiFillInstagram size={20} />
              </a>
              <a
                href="/"
                rel="noreferrer"
                target="_blank"
                className="hover:opacity-75"
              >
                <BsTwitter size={20} />
              </a>

              <a
                href="/"
                rel="noreferrer"
                target="_blank"
                className="hover:opacity-75"
              >
                <BsFacebook size={20} />
              </a>
            </nav>
          </div>
        </aside>
      ))}
    </section>
  );
};

export default AboutPage;
