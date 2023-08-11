import { Swiper, SwiperSlide } from "swiper/react";
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook, BsTwitter } from "react-icons/bs";

const products = [
  {
    id: 1,
    name: "Get analytics and data",
    category: "Grant Managment",
    href: "#",
    price: "$49",
    imageSrc:
      "https://cdn.tailkit.com/media/placeholders/photo-RSCirJ70NDM-800x1000.jpg",
    lessons: "13 lessons",
  },
  {
    id: 1,
    name: "Documents and lessons",
    category: "Data",
    href: "#",
    price: "$49",
    imageSrc:
      "https://cdn.tailkit.com/media/placeholders/photo-RSCirJ70NDM-800x1000.jpg",
    lessons: "24 lessons",
  },
  {
    id: 1,
    name: "Get Grant managment",
    category: "Grant Managment",
    href: "#",
    price: "$49",
    imageSrc:
      "https://cdn.tailkit.com/media/placeholders/photo-RSCirJ70NDM-800x1000.jpg",
    lessons: "5 lessons",
  },
  {
    id: 1,
    name: "Analytics and data",
    category: "Analytics",
    href: "#",
    price: "$49",
    imageSrc:
      "https://cdn.tailkit.com/media/placeholders/photo-RSCirJ70NDM-800x1000.jpg",
    lessons: "8 lessons",
  },
  {
    id: 1,
    name: "Get analytics and data",
    category: "Grant Managment",
    href: "#",
    price: "$49",
    imageSrc:
      "https://cdn.tailkit.com/media/placeholders/photo-RSCirJ70NDM-800x1000.jpg",
    lessons: "13 lessons",
  },
  {
    id: 1,
    name: "Documents and lessons",
    category: "Data",
    href: "#",
    price: "$49",
    imageSrc:
      "https://cdn.tailkit.com/media/placeholders/photo-RSCirJ70NDM-800x1000.jpg",
    lessons: "24 lessons",
  },
  {
    id: 1,
    name: "Get Grant managment",
    category: "Grant Managment",
    href: "#",
    price: "$49",
    imageSrc:
      "https://cdn.tailkit.com/media/placeholders/photo-RSCirJ70NDM-800x1000.jpg",
    lessons: "5 lessons",
  },
  {
    id: 1,
    name: "Analytics and data",
    category: "Analytics",
    href: "#",
    price: "$49",
    imageSrc:
      "https://cdn.tailkit.com/media/placeholders/photo-RSCirJ70NDM-800x1000.jpg",
    lessons: "8 lessons",
  },
];

export default function Teams() {
  return (
    <div className="bg-white py-20">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <header className="flex flex-col pt-10 items-center">
          <span className="text-gray-900 font-bold text-3xl mt-3">
            Meet our team
          </span>
        </header>
        <div className="">
          <Swiper
            className="group"
            slidesPerView={2}
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
              <SwiperSlide key={product.id} className="pt-10 pb-20">
                <Team />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

const Team = () => {
  const Team = {
    image:
      "https://img.freepik.com/free-photo/cute-smiling-young-man-with-bristle-looking-satisfied_176420-18989.jpg?w=740&t=st=1686874125~exp=1686874725~hmac=c760c4a284c72183088f0b43176bbc95166d2588c99fc947bd11369d857f1152",
    name: "James Carlson",
    position: "Manager",
    instagram: "#",
    twitter: "#",
    facebook: "#",
  };

  return (
    <aside className="col-span-12 sm:col-span-6 lg:col-span-4 relative group-hover:scale-90 group-hover:grayscale hover:!grayscale-0 group-hover:shadow-md hover:!shadow-2xl duration-500 hover:!scale-105  bg-gray-50 border border-gray-100 shadow-xl shadow-gray-100 rounded-2xl overflow-hidden">
      <img
        src={Team.image}
        className="h-72 w-full object-cover hover:scale-110 duration-500"
        alt=""
      />
      <div className="flex flex-col p-5 relative">
        <div className="font-lato-bold text-lg">{Team.name}</div>
        <div className="text-gray-600 text-base">{Team.position}</div>
        <nav className="mt-5 flex gap-6 text-teal-850">
          <a
            href="/"
            rel="noreferrer"
            target="_blank"
            className="hover:opacity-75"
          >
            <AiFillInstagram size={20} />
          </a>
          <a
            href="/"
            rel="noreferrer"
            target="_blank"
            className="hover:opacity-75"
          >
            <BsTwitter size={20} />
          </a>

          <a
            href="/"
            rel="noreferrer"
            target="_blank"
            className="hover:opacity-75"
          >
            <BsFacebook size={20} />
          </a>
        </nav>
      </div>
    </aside>
  );
};
