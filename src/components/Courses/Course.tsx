import { ICourse } from "@/interfaces/api/ICourse";
import Link from "next/link";
import { useRouter } from "next/router";

const Course = ({ course }: { course: ICourse }) => {
  const { locale } = useRouter();

  return (
    <Link href={`/course/${course.id}`}>
      <main className="group relative bg-white hover:bg-blue-50 duration-500 border  border-gray-50 p-3 rounded-xl shadow-xl shadow-gray-100">
        <div className="absolute left-4 top-4 text-sm bg-white/70 backdrop-blur text-gray-800 rounded-md w-max px-2 py-1">
          {course.lesson_count} lessons
        </div>
        <div className="overflow-hidden rounded-lg bg-gray-100">
          <img
            src={course.image}
            alt={course.title.en}
            className="object-cover aspect-square border rounded-xl object-center"
          />
        </div>

        <div className="mt-3 flex items-center justify-between">
          {/* <div className="text-sm text-pink-650 rounded-md w-max px-2 py-1">
              - {course.lesson_count} lessons
            </div> */}
        </div>
        <h3 className="font-lato-regular px-2 text-lg">
          {/* @ts-ignore */}
          {course.title[String(locale)]}
        </h3>
      </main>{" "}
    </Link>
  );
};

export default Course;
