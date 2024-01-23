import { Bike, Clapperboard, Ghost, Home, Search, Tv, Tv2 } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { ModeToggle } from "./mode-toggle";
import React from "react";

export const sideBarLinks = [
  {
    label: "My Space",
    icon: <Ghost />,
    href: "/my-space",
  },
  {
    label: "Search",
    icon: <Search />,
    href: "/search",
  },
  {
    label: "Home",
    icon: <Home />,
    href: "/",
  },
  {
    label: "Tv",
    icon: <Tv />,
    href: "/tv",
  },
  {
    label: "Movie",
    icon: <Clapperboard />,
    href: "/movie",
  },
  {
    label: "Sport",
    icon: <Bike />,
    href: "/sport",
  },
  {
    label: "Categories",
    icon: <Tv2 />,
    href: "/categories",
  },
];
const Sidebar = () => {
  const { pathname } = useLocation();
  return (
    <div className="w-24 h-screen left-0 top-0 fixed py-10 z-30 bg-gradient-to-r from-black">
      <div className="flex flex-col items-center gap-y-28">
        <Link to={"/"}>
          <Home />
        </Link>
        <div className="flex flex-col gap-8 items-center">
          {sideBarLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                to={link.href}
                key={link.href}
                className={`flex items-center justify-center gap-3 group hover:text-primary hover:pl-14 hover:text-nowrap ${
                  isActive ? "text-blue-500" : ""
                }`}
              >
                {link.icon}
                <span
                  className={`hidden group-hover:block  ${
                    isActive ? "text-blue-500" : ""
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            );
          })}
        </div>
        <ModeToggle />
      </div>
    </div>
  );
};

export default Sidebar;
