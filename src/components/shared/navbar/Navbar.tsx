"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "../icons/Logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { title: "Home", route: "/home" },
    { title: "About us", route: "/about-us" },
    { title: "Services", route: "/services" },
    { title: "Projects", route: "/projects" },
    { title: "Blogs", route: "/blogs" },
    { title: "Contact us", route: "/contact-us" },
  ];

  return (
    <header className="">
      <div className="container mx-auto py-3 px-4 lg:px-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Logo width={125} className="h-16" />
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Links & Button */}
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } lg:flex lg:items-center lg:gap-10 lg:static absolute top-16 left-0 w-full lg:w-auto bg-white lg:bg-transparent lg:p-0 p-4`}
          >
            <nav className="flex flex-col lg:flex-row gap-4 lg:gap-0.5">
              {navItems.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.route}
                  className="capitalize px-4 py-2 lg:py-0 hover:text-primary_two"
                >
                  {item.title}
                </Link>
              ))}
            </nav>
            <button className="mt-4 lg:mt-0 lg:ml-4 rounded-full py-2.5 px-6 bg-gradient-to-tr from-secondary_one to-secondary_two text-white">
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
