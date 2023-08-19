import Link from "next/link";
import { AiOutlineTeam } from "react-icons/ai";
import { HiArrowLongRight, HiOutlineDocumentText } from "react-icons/hi2";
import { RiKey2Line } from "react-icons/ri";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";

const Services = () => {
  const { t } = useTranslation("navigation");
  const { locale } = useRouter();
  return (
    <div className="relative z-0 py-10 w-full overflow-x-hidden">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl py-10 lg:px-8 lg:py-20">
        <header className="flex flex-col pt-10 items-center">
          <span className="text-gray-900 font-bold text-3xl mb-10">
            {t("our_services")}
          </span>
        </header>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Link
            href={"/consultation"}
            className="group p-5 md:p-7 xl:p-10 bg-white border border-white shadow-sm rounded-lg transition hover:border-blue-600 hover:bg-blue-50 duration-500"
          >
            <AiOutlineTeam size={46} className="text-blue-600 mb-2" />
            <h4 className="text-lg font-bold mb-2">1. {t("consultation")}</h4>
            <p className="leading-relaxed text-gray-600 line-clamp-6 ">
              {locale == "en"
                ? "At the GM-Dream Team we understand that managing grants can be a complex and challenging task. Whether you are a nonprofit organization, a research institution, or a private entity, securing and effectively managing grants is crucial for the success and sustainability of your projects. "
                : "В команде «GM-Dream Team» мы понимаем, что управление грантами может быть сложной задачей. Независимо от того, являетесь ли вы некоммерческой организацией, исследовательским учреждением или частным лицом, получение грантов и эффективное управление ими имеют решающее значение для успеха и устойчивости ваших проектов."}
            </p>
            <div className="mt-3 text-blue-600 flex items-center space-x-2">
              <span>{t("common:read_more")}</span>
              <HiArrowLongRight
                size={16}
                className="duration-500 group-hover:translate-x-2"
              />
            </div>
          </Link>
          <Link
            href={"/turnkey"}
            className="group p-5 md:p-7 xl:p-10 bg-white border border-white shadow-sm rounded-lg transition hover:border-blue-600 hover:bg-blue-50 duration-500 "
          >
            <RiKey2Line size={46} className="text-blue-600 mb-2" />

            <h4 className="text-lg font-bold mb-2">2. {t("turnkey")}</h4>
            <p className="leading-relaxed text-gray-600 line-clamp-6">
              {locale == "en"
                ? "Welcome to our webpage dedicated to turnkey grant management services. If you or your organization are seeking financial assistance for projects, programs, or research, navigating the complex world of grants can be overwhelming. That's where turnkey grant management services come in."
                : "Добро пожаловать на нашу веб-страницу, посвященную услугам по управлению грантами «под ключ». Если вы или ваша организация ищете финансовую помощь для проектов, программ или исследований, ориентироваться в  мире грантов может быть сложно. Поэтому мы предлагаем услуги по управлению грантами «под ключ». Наша команда предлагает комплексные решения для оптимизации процессов подачи заявок на гранты, управления грантовым проектом и состовлением отчетности, что позволяет вам сосредоточиться на достижении ваших целей."}
            </p>
            <div className="mt-3 text-blue-600 flex items-center space-x-2">
              <span>{t("common:read_more")}</span>
              <HiArrowLongRight
                size={16}
                className="duration-500 group-hover:translate-x-2"
              />
            </div>
          </Link>
          <Link
            href={"/m_e"}
            className="group p-5 md:p-7 xl:p-10 bg-white border border-white shadow-sm rounded-lg transition hover:border-blue-600 hover:bg-blue-50 duration-500 sm:col-span-2 lg:col-span-1"
          >
            <HiOutlineDocumentText size={46} className="text-blue-600 mb-2" />

            <h4 className="text-lg font-bold mb-2">3. {t("m_e")}</h4>
            <p className="leading-relaxed text-gray-600 line-clamp-6">
              {locale == "en"
                ? "We understand the importance of assessing and measuring the impact of your grant-funded projects. A robust performance evaluation and monitoring plan are essential for demonstrating the effectiveness of your programs, improving project outcomes, and ensuring accountability to your funders and stakeholders."
                : "Мы понимаем важность М&О воздействия ваших проектов, профинансированных  грантом. Надежный план М&О необходим для демонстрации эффективности ваших программ, улучшения результатов проекта и обеспечения подотчетности перед вашими спонсорами. Мы уделяем особое внимание созданию плана М&О гранта на каждом этапе жизненного цикла гранта."}
            </p>
            <div className="mt-3 text-blue-600 flex items-center space-x-2">
              <span>{t("common:read_more")}</span>
              <HiArrowLongRight
                size={16}
                className="duration-500 group-hover:translate-x-2"
              />
            </div>
          </Link>
        </div>
      </div>
      <div
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
        aria-hidden="true"
      >
        <div
          className="aspect-[1155/400] w-[72.1875rem] bg-gradient-to-tr from-[#f0fc4a] to-[#0c53b177] opacity-30"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  );
};

export default Services;
