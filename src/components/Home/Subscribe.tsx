import { BsCalendar2Week } from "react-icons/bs";
import { HiOutlineHandRaised } from "react-icons/hi2";
import useTranslation from "next-translate/useTranslation";

const Subscribe = () => {
  const { t } = useTranslation("common");
  return (
    <div className="relative isolate overflow-hidden bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight">
              {t("subscribe_our_newsletter")}
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-400">
              {t("subscribe_description")}
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 outline-none flex-auto rounded-md bg-white/5 px-3.5 py-2  shadow-sm border border-gray-300 sm:text-sm sm:leading-6"
                placeholder={t("enter_email")}
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-pink-650 px-3.5 py-2.5 text-sm font-bold text-white shadow-sm"
              >
                {t("subscribe")}
              </button>
            </div>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-pink-850/5 p-2 ring-1 ring-pink-850/10">
                <BsCalendar2Week
                  className="h-6 w-6 text-pink-650"
                  aria-hidden="true"
                />
              </div>
              <dt className="mt-4 font-semibold text-gray-700">
                {t("monthly_articles")}
              </dt>
              <dd className="mt-2 leading-7 text-gray-400">
                {t("monthly_articles_description")}
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-pink-850/5 p-2 ring-1 ring-pink-850/10">
                <HiOutlineHandRaised
                  className="h-6 w-6 text-pink-650"
                  aria-hidden="true"
                />
              </div>
              <dt className="mt-4 font-semibold text-gray-700">
                {t("no_spam")}
              </dt>
              <dd className="mt-2 leading-7 text-gray-400">
                {t("no_spam_desc")}
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
        aria-hidden="true"
      >
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9189fc57] opacity-30"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  );
};

export default Subscribe;
