import { navLinks } from "@/assets/data/navLinks";
import useUserStore from "@/store/useUser";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { BiChevronDown } from "react-icons/bi";
import useTranslation from "next-translate/useTranslation";

const MobileMenu = ({
  isOpen,
  pathname,
  activeMenu,
  setActiveMenu,
}: {
  isOpen: boolean;
  pathname: string;
  activeMenu: string;
  setActiveMenu: (active: string) => void;
}) => {
  const { t } = useTranslation("navigation");
  const { isAuth, user } = useUserStore();
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.aside
          initial={{ height: 0, top: 10, opacity: 0 }}
          exit={{ height: 0, top: 10, opacity: 0 }}
          animate={{ height: "auto", top: 52, opacity: 1 }}
          className="fixed right-5  bg-white border p-3 rounded-xl rounded-tr-none z-20  w-64 overflow-hidden md:hidden"
        >
          {navLinks.map((links) => (
            <div className="relative" key={links.route}>
              {links.route == "#" ? (
                <>
                  {links.sub!.map((sub) => (
                    <Link
                      key={sub.route}
                      href={sub.route}
                      onClick={() => {
                        activeMenu == links.route
                          ? setActiveMenu("")
                          : setActiveMenu(links.route);
                      }}
                      className={`${
                        pathname == links.route
                          ? "border-pink-650 text-pink-650"
                          : "border-transparent"
                      } flex-x justify-between py-4 p-5 font-medium  border-l-2 hover:border-pink-650 hover:text-pink-650 duration-300`}
                    >
                      <span className="whitespace-nowrap text-base">
                        {t(sub.name)}
                      </span>
                    </Link>
                  ))}
                </>
              ) : (
                <Link
                  // href={links.route}
                  href={
                    links.route == "/user/signin"
                      ? isAuth
                        ? "#"
                        : links.route
                      : links.route
                  }
                  onClick={() => {
                    activeMenu == links.route
                      ? setActiveMenu("")
                      : setActiveMenu(links.route);
                  }}
                  className={`${
                    pathname == links.route
                      ? "border-pink-650 text-pink-650"
                      : "border-transparent"
                  } flex-x justify-between py-3 px-5 font-medium  border-l-2 hover:border-pink-650 hover:text-pink-650 duration-300`}
                >
                  <span className="whitespace-nowrap text-base">
                    {links.route == "/user/signin"
                      ? isAuth
                        ? user.username.slice(0, 5)
                        : t(links.name)
                      : t(links.name)}
                  </span>
                  {links.sub && (
                    <BiChevronDown
                      className={`${
                        activeMenu == links.route && "-rotate-90"
                      } duration-500`}
                    />
                  )}
                </Link>
              )}
            </div>
          ))}
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
