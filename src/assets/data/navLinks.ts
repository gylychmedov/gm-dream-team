import { INavLink } from "@/interfaces/components/INavLink";

export const navLinks: INavLink[] = [
  {
    name: "home",
    route: "/",
  },
  {
    name: "about",
    route: "/about",
  },

  {
    name: "our_services",
    route: "#",
    sub: [
      {
        name: "courses",
        route: "/courses",
      },
      {
        name: "consultation",
        route: "/consultation",
      },
      {
        name: "m_e",
        route: "/m_e",
      },
      {
        name: "turnkey",
        route: "/turnkey",
      },
      {
        name: "for_grantors",
        route: "/grantors",
      },
    ],
  },

  {
    name: "contact",
    route: "/contact",
  },
  {
    name: "sign_in",
    route: "/user/signin",
  },
];
