import Layout from "@/components/Layout/Layout";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";

const ConsultationPage = () => {
  const { t } = useTranslation("services");
  return (
    <Layout title="Consultation" className="py-24 sm:py-32 relative isolate">
      <img
        src="https://images.unsplash.com/photo-1562564055-71e051d33c19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 h-full w-full object-cover bg-blue-850 bg-opacity-70"></div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl text-center">
            {t("consultation_1")}
          </h1>
          <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-white lg:max-w-none lg:grid-cols-2">
            <div>
              <p>{t("consultation_2")}</p>
              <p className="mt-8">{t("consultation_3")}</p>
              <p>{t("consultation_4")}</p>
              <p className="mt-8">
                {t("consultation_5")}

                <br />
                {t("consultation_6")}
              </p>

              <p className="mt-8">{t("consultation_7")}</p>
              <p className="mt-8">{t("consultation_8")}</p>
            </div>
            <div>
              <p className="mt-8">{t("consultation_9")}</p>

              <p className="mt-8">{t("consultation_10")}</p>

              <p className="mt-8">{t("consultation_11")}</p>

              <p className="mt-8">{t("consultation_12")}</p>

              <p className="mt-8">{t("consultation_13")}</p>
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
