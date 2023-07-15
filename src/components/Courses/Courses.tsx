import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Get analytics and data",
    category: "Grant Managment",
    href: "#",
    price: "$49",
    imageSrc: "/course.jpg",
    lessons: "13 lessons",
  },
  {
    id: 1,
    name: "Documents and lessons",
    category: "Data",
    href: "#",
    price: "$49",
    imageSrc: "/course.jpg",
    lessons: "24 lessons",
  },
  {
    id: 1,
    name: "Get Grant managment",
    category: "Grant Managment",
    href: "#",
    price: "$49",
    imageSrc: "/course.jpg",
    lessons: "5 lessons",
  },
  {
    id: 1,
    name: "Analytics and data",
    category: "Analytics",
    href: "#",
    price: "$49",
    imageSrc: "/course.jpg",
    lessons: "8 lessons",
  },
  {
    id: 1,
    name: "Get analytics and data",
    category: "Grant Managment",
    href: "#",
    price: "$49",
    imageSrc: "/course.jpg",
    lessons: "13 lessons",
  },
  {
    id: 1,
    name: "Documents and lessons",
    category: "Data",
    href: "#",
    price: "$49",
    imageSrc: "/course.jpg",
    lessons: "24 lessons",
  },
  {
    id: 1,
    name: "Get Grant managment",
    category: "Grant Managment",
    href: "#",
    price: "$49",
    imageSrc: "/course.jpg",
    lessons: "5 lessons",
  },
  {
    id: 1,
    name: "Analytics and data",
    category: "Analytics",
    href: "#",
    price: "$49",
    imageSrc: "/course.jpg",
    lessons: "8 lessons",
  },
];

export default function Courses() {
  return (
    <div className="bg-white py-20">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex items-center justify-between space-x-4">
          <div className="flex flex-col">
            <h2 className="text-3xl text-gray-900 font-lato-bold">
              Popular courses for you
            </h2>
            <span className="text-base text-gray-400 mt-3 font-lato-regular">
              Get the best course with the best price with world-class tutors
            </span>
          </div>
          <Link
            href="/courses"
            className="whitespace-nowrap text-sm font-medium text-indigo-600 hover:text-indigo-500"
          >
            View all
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
            {products.map((product) => (
              <SwiperSlide key={product.id} className="pb-10">
                <Link href={`/course/${product.id}`}>
                  <main className="group relative bg-white hover:bg-blue-50 duration-500 border  border-gray-50 p-3 rounded-xl shadow-xl shadow-gray-100">
                    <div className="absolute left-4 top-4 text-sm bg-white/70 backdrop-blur text-gray-800 rounded-md w-max px-2 py-1">
                      {product.lessons}
                    </div>
                    <div className="overflow-hidden rounded-lg bg-gray-100">
                      <img
                        src={product.imageSrc}
                        alt={product.imageSrc}
                        className="object-cover aspect-square border rounded-xl object-center"
                      />
                    </div>

                    <div className="mt-3 flex items-center justify-between">
                      <div className="text-sm text-pink-650 rounded-md w-max px-2 py-1">
                        - {product.category}
                      </div>
                    </div>
                    <h3 className="font-lato-bold px-2 text-lg">
                      {product.name}
                    </h3>
                  </main>{" "}
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
