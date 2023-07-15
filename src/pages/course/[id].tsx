import Layout from "@/components/Layout/Layout";
import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { BsChevronRight } from "react-icons/bs";

const detail = {
  title: "Day 3",
  name: "Introduction to Civil Society Organizational Management",
  description:
    "Overview of civil society organizations and their role in society. Key challenges faced by civil society organizations. Importance of effective management in achieving organizational goals.",
};

const lessons = [
  {
    id: 1,
    name: "Day 1",
    category: "Introduction to Civil Society Organizational Management ",
    imageSrc: "/course.jpg",
  },
  {
    id: 1,
    name: "Day 2",
    category: "Introduction to Civil Society Organizational Management",
    imageSrc: "/course.jpg",
  },
  {
    id: 1,
    name: "Day 3",
    category: "Introduction to Civil Society Organizational Management ",
    imageSrc: "/course.jpg",
  },
  {
    id: 1,
    name: "Day 4",
    category: "Introduction to Civil Society Organizational Management",
    imageSrc: "/course.jpg",
  },
  {
    id: 1,
    name: "Day 5",
    category: "Introduction to Civil Society Organizational Management ",
    imageSrc: "/course.jpg",
  },
  {
    id: 1,
    name: "Day 6",
    category: "Introduction to Civil Society Organizational Management",
    imageSrc: "/course.jpg",
  },
  {
    id: 1,
    name: "Day 7",
    category: "Introduction to Civil Society Organizational Management ",
    imageSrc: "/course.jpg",
  },
  {
    id: 1,
    name: "Day 8",
    category: "Introduction to Civil Society Organizational Management",
    imageSrc: "/course.jpg",
  },
];
export default function Example() {
  return (
    <Layout
      title="Course"
      className="contain px-2 py-5 grid grid-cols-12 gap-x-3 gap-y-3"
    >
      <Breadcrumb title="Day 3" />
      <section className="col-span-12 lg:col-span-8 bg-white border border-gray-100 rounded-xl">
        <video
          src="https://v4.cdnpk.net/videvo_files/video/free/video0464/large_watermarked/_import_611b5585777d85.29325813_FPpreview.mp4"
          className="w-full rounded-t-lg"
          controls
        />

        <div className="mt-10 px-5 pb-5">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            {detail.title}
          </h1>
          <h3 className="text-xl text-gray-700 font-medium mt-3">
            {detail.name}
          </h3>

          <p className="mt-6 text-gray-500 text-base">{detail.description}</p>

          {/* <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
            <button
              type="button"
              className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
            >
              Pay
            </button>
            <button
              type="button"
              className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-50 px-8 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
            >
              Preview
            </button>
          </div> */}
        </div>
      </section>
      <section className="col-span-12 lg:col-span-4 space-y-3 h-full overflow-y-auto">
        {lessons.map((lesson, index) => (
          <div
            key={index}
            className={`${
              index == 2 ? "bg-blue-850 text-white" : "bg-white"
            } group relative hover:bg-blue-850 hover:text-white duration-500 cursor-pointer border rounded-xl p-2 border-gray-100 flex items-center shadow-xl shadow-gray-100`}
          >
            <div className="overflow-hidden w-24 shrink-0 rounded-lg bg-gray-100">
              <img
                src={lesson.imageSrc}
                alt={lesson.imageSrc}
                className="object-cover w-24 h-24 border rounded-xl"
              />
            </div>

            <div className="flex flex-col">
              <h3 className="font-lato-bold px-2 text-base">{lesson.name}</h3>

              <div
                className={`${
                  index == 2 ? "text-white" : "text-gray-400"
                } text-sm group-hover:text-white rounded-md px-2 py-1 line-clamp-1`}
              >
                - {lesson.category}
              </div>
            </div>
          </div>
        ))}
      </section>
    </Layout>
  );
}

const Breadcrumb = ({ title }: { title: string }) => {
  return (
    <nav className="flex col-span-12 space-x-4 rounded-md bg-white w-full px-6 shadow-xl overflow-hidden shadow-gray-100 border border-gray-100">
      <Link
        href="/"
        className="flex items-center text-gray-400 hover:text-gray-500"
      >
        <AiFillHome className="h-5 w-5 flex-shrink-0" />
      </Link>
      <div className="flex items-center">
        <BsChevronRight className="h-full w-12 text-gray-100" />
        <Link
          href={"/courses"}
          className="ml-2 text-sm font-medium text-gray-500 hover:text-gray-700"
        >
          Courses
        </Link>
      </div>
      <div className="flex items-center">
        <BsChevronRight className="h-full w-12 text-gray-100" />
        <div className="ml-2 text-sm font-medium text-gray-500 hover:text-gray-700 whitespace-nowrap">
          {title}
        </div>
      </div>
    </nav>
  );
};
