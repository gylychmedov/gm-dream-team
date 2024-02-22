import Layout from "@/components/Layout/Layout";
import { TbWorldWww } from "react-icons/tb";
import { IoShareSocialSharp } from "react-icons/io5";
import { MdMail } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import useTranslation from "next-translate/useTranslation";
import { ChangeEvent, useState } from "react";
import { api } from "@/common/API";
import toast from "react-hot-toast";

const initalState = {
  name: "",
  mail: "",
  subject: "",
  text: "",
};

const ContactPage = () => {
  const { t } = useTranslation("common");
  const [formData, setFormData] = useState(initalState);
  const handleChange = (e: ChangeEvent<HTMLFormElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    api.post("front/contact_us", { ...formData }).then((res) => {
      if ((res.data.message = "success")) {
        toast.success(t("message_sent"));
        setFormData(initalState);
      }
    });
  };

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
            <a href="tel:+995591100467" className="text-gray-600">
              +995 591 10 04 67
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
        <form
          onChange={handleChange}
          onSubmit={handleSubmit}
          className="col-span-12 md:col-span-6 flex flex-col space-y-4"
        >
          <input
            value={formData.name}
            required
            className="input"
            name="name"
            placeholder={`${t("name")}*`}
          />
          <input
            value={formData.mail}
            required
            className="input"
            name="mail"
            type="email"
            placeholder={`${t("email")}*`}
          />

          <input
            value={formData.subject}
            required
            className="input"
            name="subject"
            placeholder={t("subject")}
          />
          <textarea
            value={formData.text}
            required
            className="input"
            name="text"
            placeholder={t("your_message")}
            rows={3}
          />
          <button
            type="submit"
            className="bg-pink-650 py-3 text-base rounded-lg text-white"
          >
            {t("submit_now")}
          </button>
        </form>
      </main>
    </Layout>
  );
};

export default ContactPage;
