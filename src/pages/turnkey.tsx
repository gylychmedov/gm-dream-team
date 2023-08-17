import Layout from "@/components/Layout/Layout";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";

const TurnkeyPage = () => {
  const { t } = useTranslation("services");
  return (
    <Layout title="Turnkey" className="bg-gray-900">
      <div className="relative isolate overflow-hidden pt-14">
        <img
          src="https://images.unsplash.com/photo-1627406951080-9ad86f960da6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 h-full w-full object-cover bg-blue-850 bg-opacity-70"></div>
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-5xl py-32 sm:py-20 lg:py-36 px-3 sm:px-5">
          <div className="">
            <h1 className="text-center flex-center space-x-6 text-4xl font-bold tracking-tight text-white sm:text-6xl">
              <img src="/key.png" className="w-20" alt="key" />
              <span>{t("turnkey_11")}</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              {t("turnkey_1")}
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-300">
              {t("turnkey_2")}

              <br />
              {t("turnkey_3")}
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-300">
              {t("turnkey_4")}
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-300">
              {t("turnkey_5")}
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-300">
              {t("turnkey_6")}
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-300">
              {t("turnkey_7")}
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-300">
              {t("navigation:contact")}
              <br />
              {t("turnkey_8")}
              <br />
              {t("turnkey_9")}
              <br />
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-300">
              {t("turnkey_10")}
            </p>

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
      </div>
    </Layout>
  );
};

export default TurnkeyPage;
