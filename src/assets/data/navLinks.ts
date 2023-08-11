import { INavLink } from "@/interfaces/components/INavLink";

export const navLinks: INavLink[] = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "About us",
    route: "/about",
  },

  {
    name: "Our services",
    route: "#",
    sub: [
      {
        name: "Courses",
        route: "/courses",
      },
      {
        name: "Consultation",
        route: "/consultation",
      },
      {
        name: "M&E",
        route: "/m_e",
      },
      {
        name: "Turnkey services",
        route: "/turnkey",
      },
    ],
  },
  {
    name: "For Grantors",
    route: "/grantors",
  },
  {
    name: "Contact us",
    route: "/contact",
  },
  {
    name: "Sign up",
    route: "/user/signup",
  },
];
