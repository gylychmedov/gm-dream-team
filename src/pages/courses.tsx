import Course from "@/components/Courses/Course";
import Layout from "@/components/Layout/Layout";
import useCoursesStore from "@/store/useCourses";

const CoursesPage = () => {
  const { courses } = useCoursesStore();
  return (
    <Layout title="Courses" className="bg-blue-100/5 py-10">
      <div className=" contain px-4 sm:px-6  lg:px-8">
        <div className="flex items-center justify-between space-x-4">
          <div className="flex flex-col">
            <h2 className="text-3xl text-gray-900 font-lato-bold">
              Popular courses for you
            </h2>
            <span className="text-base text-gray-400 mt-3 font-lato-regular">
              Get the best course with the best price with world-class tutors
            </span>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {courses.map((course) => (
            <Course key={course.id} course={course} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default CoursesPage;
