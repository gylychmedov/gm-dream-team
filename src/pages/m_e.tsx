import Layout from "@/components/Layout/Layout";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";

const ConsultationPage = () => {
  const { t } = useTranslation("services");

  return (
    <Layout title="M & E" className="py-24 sm:py-32 relative isolate">
      <img
        src="https://images.unsplash.com/photo-1623423415485-1d36867376b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 h-full w-full object-cover bg-blue-850 bg-opacity-70"></div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl text-center">
            {t("m_e_11")}
          </h1>
          <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-white lg:max-w-none lg:grid-cols-2">
            <div>
              <p className="mt-8">{t("m_e_1")}</p>
              <p>{t("m_e_2")}</p>
              <p className="mt-8">{t("m_e_3")}</p>
              <p className="mt-8">{t("m_e_4")}</p>
              <p className="mt-8">{t("m_e_5")}</p>
            </div>
            <div>
              <p className="mt-8">{t("m_e_6")}</p>
              <p className="mt-8">{t("m_e_7")}</p>
              <p className="mt-8">{t("m_e_8")}</p>
              <p className="mt-8">{t("m_e_9")}</p>
              <p className="mt-8">{t("m_e_10")}</p>
            </div>
          </div>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/contact"
              className="rounded-md bg-pink-650 w-80 text-center py-4 text-sm font-semibold text-white shadow-sm hover:-translate-y-1 duration-500"
            >
              {t("navigation:contact")}
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ConsultationPage;
