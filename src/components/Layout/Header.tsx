import { navLinks } from "@/assets/data/navLinks";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { RiMenu5Fill } from "react-icons/ri";
import LoaderFullscreen from "../Elements/Loader.fullscreen";

const Header = () => {
  const route = useRouter();
  const [active, setActive] = useState("");
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    Router.events.on("routeChangeStart", () =>
      loaderRef.current?.classList.remove("hidden")
    );
    Router.events.on("routeChangeComplete", () => {
      loaderRef.current?.classList.add("hidden");
    });
    Router.events.on("routeChangeError", () => {
      loaderRef.current?.classList.add("hidden");
    });
  }, [route.asPath]);

  return (
    <>
      <div ref={loaderRef} className="hidden">
        <LoaderFullscreen />
      </div>
      <header className="flex-x justify-between bg-white px-4 relative">
        <img
          src="/logo.svg"
          className="w-9 cursor-pointer  hover:scale-110 duration-500"
          alt=""
        />

        <div className="md:hidden border w-10 h-10 shrink-0 flex-center rounded-lg border-gray-100">
          <RiMenu5Fill size={20} />
        </div>
        <nav className="flex-x space-x-1 hidden md:flex">
          {navLinks.map((links) => (
            <div className="relative" key={links.route}>
              {links.route == "#" ? (
                <div
                  onClick={() => {
                    active == links.route
                      ? setActive("")
                      : setActive(links.route);
                  }}
                  className={`${
                    route.pathname == links.route
                      ? "border-pink-650 text-pink-650"
                      : "border-transparent"
                  } flex-x justify-between py-4 cursor-pointer px-5 font-medium  border-b-2 hover:border-pink-650 hover:text-pink-650 duration-300`}
                >
                  <span className="whitespace-nowrap text-base">
                    {links.name}
                  </span>
                  {links.sub && (
                    <BiChevronDown
                      className={`${
                        active == links.route && "-rotate-90"
                      } duration-500`}
                    />
                  )}
                </div>
              ) : (
                <Link
                  href={links.route}
                  onClick={() => {
                    active == links.route
                      ? setActive("")
                      : setActive(links.route);
                  }}
                  className={`${
                    route.pathname == links.route
                      ? "border-pink-650 text-pink-650"
                      : "border-transparent"
                  } flex-x justify-between py-4 px-5 font-medium  border-b-2 hover:border-pink-650 hover:text-pink-650 duration-300`}
                >
                  <span className="whitespace-nowrap text-base">
                    {links.name}
                  </span>
                  {links.sub && (
                    <BiChevronDown
                      className={`${
                        active == links.route && "-rotate-90"
                      } duration-500`}
                    />
                  )}
                </Link>
              )}

              {active == links.route && (
                <nav className="flex flex-col absolute z-20 top-16 w-60 bg-white shadow-lg overflow-hidden shadow-gray-100 rounded-lg">
                  {links.sub?.map((sub) => (
                    <Link
                      key={sub.route}
                      href={sub.route}
                      className="hover:bg-gray-100 py-3 px-5"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </nav>
              )}
            </div>
          ))}
        </nav>
      </header>
    </>
  );
};

export default Header;
