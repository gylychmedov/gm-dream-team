import { navLinks } from "@/assets/data/navLinks";
import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="flex-x space-x-3">
              <img src="/logo.svg" className="w-10" />
              <div className="flex flex-col">
                <div className="font-lato-bold text-2xl text-teal-850">
                  GM <span className=" text-pink-650">DREAM</span>
                </div>
                <div>TEAM</div>
              </div>
            </div>

            <p className="mt-5 max-w-xs text-gray-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse non
              cupiditate quae nam molestias.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3">
            <div>
              <p className="font-lato-bold text-gray-900 text-base">Pages</p>

              <nav className="mt-6 flex flex-col space-y-4 text-sm">
                {navLinks.map((links) => (
                  <Link
                    key={links.route}
                    href={links.route}
                    className="text-gray-700 hover:opacity-75 hover:border-l hover:pl-4 duration-500"
                  >
                    {links.name}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <p className="text-gray-900 font-lato-bold text-base">
                Our services
              </p>
              <nav className="mt-6 flex flex-col space-y-4 text-sm">
                {navLinks[2].sub?.map((links) => (
                  <Link
                    key={links.route}
                    href={`/services/${links.route}`}
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    {links.name}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <p className="font-lato-bold text-base text-gray-900">
                Social links
              </p>

              <nav className="mt-8 flex gap-6">
                <a
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <AiFillInstagram size={24} />
                </a>
                <a
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <BsTwitter size={24} />
                </a>

                <a
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <BsFacebook size={24} />
                </a>
              </nav>
            </div>
          </div>
        </div>

        <p className="text-xs text-gray-500">
          &copy; 2023 GM Dream. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
export default Footer;