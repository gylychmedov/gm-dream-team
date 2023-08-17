import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import Link from "next/link";
import useCoursesStore from "@/store/useCourses";
import Course from "./Course";
import useTranslation from "next-translate/useTranslation";

const Courses = () => {
  const { courses } = useCoursesStore();
  const { t } = useTranslation("common");

  return (
    <div className="bg-white py-20">
      {courses.length > 0 && (
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="flex items-center justify-between space-x-4">
            <div className="flex flex-col">
              <h2 className="text-3xl text-gray-900 font-lato-bold">
                {t("popular_courses")}
              </h2>
              <span className="text-base text-gray-400 mt-3 font-lato-regular">
                {t("popular_description")}
              </span>
            </div>
            <Link
              href="/courses"
              className="whitespace-nowrap text-sm font-medium text-indigo-600 hover:text-indigo-500"
            >
              {t("view_all")}
              <span aria-hidden="true"> &rarr;</span>
            </Link>
          </div>
          <div className="mt-10">
            <Swiper
              slidesPerView={2}
              modules={[Autoplay]}
              autoplay={{ delay: 4000 }}
              breakpoints={{
                240: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                640: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                1200: {
                  slidesPerView: 4,
                  spaceBetween: 15,
                },
              }}
            >
              {courses.map((course) => (
                <SwiperSlide key={course.id} className="pb-10">
                  <Course course={course} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </div>
  );
};

export default Courses;
