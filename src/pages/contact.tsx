import Layout from "@/components/Layout/Layout";
import { TbWorldWww } from "react-icons/tb";
import { IoShareSocialSharp } from "react-icons/io5";
import { MdMail } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import useTranslation from "next-translate/useTranslation";

const ContactPage = () => {
  const { t } = useTranslation("common");
  return (
    <Layout title="Contact">
      <main className="grid grid-cols-12 gap-3 md:pt-5 md:pb-10 lg:gap-10 contain">
        <header className="col-span-12 flex-center py-10  flex-center flex-col">
          <span className="text-teal-850 font-bold">{t("need_help")}?</span>
          <span className="text-gray-900 font-bold text-3xl mt-3">
            {t("get_touch")}
          </span>
        </header>
        <section className="col-span-12 md:col-span-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-3 lg:gap-5 group">
          <aside className="bg-white flex-center px-4 py-6 lg:p-10 flex-col rounded-lg shadow-xl shadow-gray-100 group-hover:blur hover:!blur-0 group-hover:scale-90 hover:!scale-110 duration-500 cursor-default">
            <div className="bg-blue-500/10 w-14 h-14 flex-center rounded-full text-blue-500 mb-5">
              <TbWorldWww size={23} />
            </div>
            <h2 className="mb-2 font-lato-bold text-gray-900 text-lg">
              {t("our_website")}
            </h2>
            <div className="text-gray-600">www.gm-dream.team</div>
          </aside>
          <aside className="bg-white flex-center px-4 py-6 lg:p-10 flex-col rounded-lg shadow-xl shadow-gray-100 group-hover:blur hover:!blur-0 group-hover:scale-90 hover:!scale-110 duration-500 cursor-default">
            <div className="bg-green-500/10 w-14 h-14 flex-center rounded-full text-green-500 mb-5">
              <BiSupport size={23} />
            </div>
            <h2 className="mb-2 font-lato-bold text-gray-900 text-lg">
              {t("call_us")}
            </h2>
            <a href="tel:+995599488466" className="text-gray-600">
              +995 599 48 84 66
            </a>
          </aside>
          <aside className="bg-white flex-center px-4 py-6 lg:p-10 flex-col rounded-lg shadow-xl shadow-gray-100 group-hover:blur hover:!blur-0 group-hover:scale-90 hover:!scale-110 duration-500 cursor-default">
            <div className="bg-yellow-500/10 w-14 h-14 flex-center rounded-full text-yellow-500 mb-5">
              <MdMail size={23} />
            </div>
            <h2 className="mb-2 font-lato-bold text-gray-900 text-lg">
              {t("email_us")}
            </h2>
            <a
              href="mailto:admin@gm-dream.team"
              target="_blank"
              className="text-gray-600 w-full text-center break-words"
            >
              admin@gm-dream.team
            </a>
          </aside>
          <aside className="bg-white flex-center px-4 py-6 lg:p-10 flex-col rounded-lg shadow-xl shadow-gray-100 group-hover:blur hover:!blur-0 group-hover:scale-90 hover:!scale-110 duration-500 cursor-default">
            <div className="bg-orange-500/10 w-14 h-14 flex-center rounded-full text-orange-500 mb-5">
              <IoShareSocialSharp size={23} />
            </div>
            <h2 className="mb-2 font-lato-bold text-gray-900 text-lg text-center">
              {t("social_accounts")}
            </h2>
            <a
              href="https://www.instagram.com/p/CuMwFvfNn1w/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
              target="_blank"
              className="text-gray-600"
            >
              Instagram
            </a>

            <a
              href="https://facebook.com/groups/1835378983543572/"
              target="_blank"
              className="text-gray-600"
            >
              Facebook
            </a>

            <a
              href="https://wa.me/qr/W3G72LWM3UBNP1"
              target="_blank"
              className="text-gray-600"
            >
              Whatsapp
            </a>
          </aside>
        </section>
        <section className="col-span-12 md:col-span-6 flex flex-col space-y-4">
          <input className="input" placeholder={`${t("name")}*`} />
          <input className="input" placeholder={`${t("email")}*`} />
          <input className="input" placeholder={t("phone")} />
          <input className="input" placeholder={t("subject")} />
          <textarea
            className="input"
            placeholder={t("your_message")}
            rows={3}
          />
          <button className="bg-pink-650 py-3 text-base rounded-lg text-white">
            {t("submit_now")}
          </button>
        </section>
      </main>
    </Layout>
  );
};

export default ContactPage;
