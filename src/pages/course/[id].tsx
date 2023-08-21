import { api } from "@/common/API";
import Lesson from "@/components/Courses/Lesson";
import Breadcrumb from "@/components/Elements/Breadcrumb";
import Layout from "@/components/Layout/Layout";
import { ICourseDetail } from "@/interfaces/api/ICourseDetail";
import { ILesson } from "@/interfaces/api/ILesson";
import { ELocale } from "@/interfaces/core/ELang";
import useUserStore from "@/store/useUser";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useTranslation from "next-translate/useTranslation";
import { getCookie } from "cookies-next";
import { AxiosResponse } from "axios";
import { IActiveLessonState } from "@/interfaces/state/IActiveLessonState";
import Document from "@/components/Courses/Document";

const CoursePage = () => {
  const token = getCookie("token");
  const { t } = useTranslation("common");
  const { query, locale } = useRouter();
  const [detail, setDetail] = useState<ICourseDetail>();
  const [active, setActive] = useState<IActiveLessonState>();
  const { isAuth } = useUserStore();

  useEffect(() => {
    token
      ? api
          .get<AxiosResponse<ICourseDetail>>(`front/course/${query.id}`)
          .then((res) => {
            setDetail(res.data.data);
            if (res.data.data?.lessons?.length) {
              setActive({
                lesson: res.data.data.lessons[0],
                document: res.data.data?.documents?.filter(
                  (el) => el?.video_id == res.data.data.lessons[0].id
                ),
              });
            }
          })
      : api.get(`front/course/${query.id}/info`).then((res) => {
          setDetail(res.data.data);
          if (res.data.data?.lessons?.length) {
            setActive({ lesson: res.data.data.lessons[0], document: [] });
          }
        });
  }, [query.id]);

  const handleSelect = (lesson: ILesson) => {
    setActive({
      lesson: lesson,
      document: detail!.documents?.filter((el) => el?.video_id == lesson.id),
    });
  };

  return (
    <Layout
      title={t("course")}
      className="contain px-2 py-5 grid grid-cols-12 gap-x-3  gap-y-3"
    >
      {!isAuth || !active ? (
        <>
          <Breadcrumb
            links={[
              {
                link: `/courses`,
                title: t("courses"),
              },
              {
                link: `#`,
                title: detail?.title[locale as ELocale] ?? "",
              },
            ]}
          />
          <section className="col-span-12 grid grid-cols-1 xl:grid-cols-12 xl:gap-x-4 bg-white border border-gray-100 rounded-xl">
            <div className="xl:col-span-4">
              <img src={detail?.image} className="w-full rounded-lg" />
            </div>

            <div className="mt-10 px-5 pb-5 xl:col-span-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                {detail?.title[locale as ELocale]}
              </h1>
              {detail?.description && (
                <div
                  className="mt-6 text-gray-500 text-base"
                  dangerouslySetInnerHTML={{
                    __html: String(detail.description[locale as ELocale]),
                  }}
                />
              )}
            </div>
          </section>
        </>
      ) : (
        active && (
          <>
            <Breadcrumb
              links={[
                {
                  link: `/courses`,
                  title: active.lesson.coures_title[locale as ELocale],
                },
                {
                  link: `#`,
                  title: active.lesson.title[locale as ELocale],
                },
              ]}
            />
            <section className="col-span-12 lg:col-span-8 bg-white border border-gray-100 rounded-xl">
              {active.lesson.video ? (
                <video
                  src={active.lesson.video}
                  className="w-full rounded-t-lg"
                  controls
                />
              ) : (
                <img
                  src={active.lesson.image}
                  className="w-full rounded-t-lg"
                />
              )}
              <Document document={active.document} locale={String(locale)} />

              <div className="mt-10 px-5 pb-5">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                  {active.lesson.title[locale as ELocale]}
                </h1>
                <h3 className="text-xl text-gray-700 font-medium mt-3">
                  {active.lesson.coures_title[locale as ELocale]}
                </h3>
                {active?.lesson.description && (
                  <div
                    className="mt-6 text-gray-500 text-base"
                    dangerouslySetInnerHTML={{
                      __html: active.lesson.description[locale as ELocale],
                    }}
                  />
                )}
              </div>
            </section>
          </>
        )
      )}
      {detail && (
        <section className="col-span-12 lg:col-span-4 space-y-3 h-full overflow-y-auto">
          {detail.lessons.length > 0 &&
            detail.lessons.map((lesson) => (
              <Lesson
                key={lesson.id}
                lesson={lesson}
                active={active?.lesson.id == lesson.id}
                onClick={handleSelect}
              />
            ))}
        </section>
      )}
    </Layout>
  );
};

export default CoursePage;
