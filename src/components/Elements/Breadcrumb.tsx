import { IBreadcrumbProps } from "@/interfaces/props/IBreadcrumbProps";
import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { BsChevronRight } from "react-icons/bs";

const Breadcrumb = ({ links }: IBreadcrumbProps) => {
  return (
    <nav className="flex col-span-12 space-x-4 rounded-md bg-white w-full px-6 shadow-xl overflow-hidden shadow-gray-100 border border-gray-100">
      <Link
        href="/"
        className="flex items-center text-gray-400 hover:text-gray-500"
      >
        <AiFillHome className="h-5 w-5 flex-shrink-0" />
      </Link>
      {links?.length > 0 &&
        links.map((el) => (
          <div className="flex items-center" key={el.title}>
            <BsChevronRight className="h-full w-12 text-gray-100" />
            <Link
              href={el.link}
              className="ml-2 text-sm font-medium text-gray-500 hover:text-gray-700"
            >
              {el.title}
            </Link>
          </div>
        ))}
    </nav>
  );
};

export default Breadcrumb;
