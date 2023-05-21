import { navLinks } from "@/assets/data/navLinks";
import Link from "next/link";
import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { RiMenu5Fill } from "react-icons/ri";

const Header = () => {
  const [active, setActive] = useState("");
  return (
    <header className="flex-x justify-between bg-white px-4 relative">
      {/* <img src="" alt="" /> */}
      <div className="text-lg font-bold py-4">
        GM <span className="text-orange-650">TEAM</span>
      </div>
      <div className="md:hidden border w-10 h-10 shrink-0 flex-center rounded-lg border-gray-100">
        <RiMenu5Fill size={20} />
      </div>
      <nav className="flex-x space-x-1 py-2 hidden md:flex">
        {navLinks.map((links) => (
          <div className="relative" key={links.route}>
            <Link
              href={links.route}
              onClick={() => {
                active == links.route ? setActive("") : setActive(links.route);
              }}
              className="flex-x justify-between py-3 px-5 font-medium rounded-lg hover:bg-orange-650 hover:text-white duration-300"
            >
              <span className="whitespace-nowrap">{links.name}</span>
              {links.sub && (
                <BiChevronDown
                  className={`${
                    active == links.route && "-rotate-90"
                  } duration-500`}
                />
              )}
            </Link>

            {active == links.route && (
              <nav className="flex flex-col absolute top-16 w-60 bg-white shadow-lg shadow-gray-100 rounded-lg">
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
  );
};

export default Header;
