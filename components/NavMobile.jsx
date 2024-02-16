"use client";

import React, { useState } from "react";
import { RiMenu2Line, RiHomeFill } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";
import { BiSolidFoodMenu } from "react-icons/bi";
import { FaUsers, FaEnvelope } from "react-icons/fa";

import { Link as ScrollLink } from "react-scroll";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const links = [
  {
    icon: <RiHomeFill />,
    path: "home",
    name: "خانه ",
    offset: 0,
  },
  {
    icon: <BiSolidFoodMenu />,
    path: "menu",
    name: "منو",
    offset: 0,
  },
  {
    icon: <FaUsers />,
    path: "about",
    name: "درباره ما",
    offset: -50,
  },
  {
    icon: <FaEnvelope />,
    path: "contact",
    name: "تماس با ما",
    offset: 0,
  },
];
const NavMobile = ({ containerStyles, iconStyles }) => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className={`${containerStyles}`}>
      <div
        onClick={() => setOpenMenu(!openMenu)}
        className="cursor-pointer outline-none"
      >
        <RiMenu2Line className="text-white text-3xl transition-all duration-200" />
      </div>
      <aside
        className={`${openMenu ? "left-0" : "left-full"}
      bg-black fixed w-full z-100 p-10 top-0 bottom-0 transition-all duration-500`}
      >
        <div className="flex flex-col items-center justify-between h-full">
          <div
            onClick={() => setOpenMenu(!openMenu)}
            className="cursor-pointer outline-none text-4xl text-white absolute w-10 h-10 right-8 top-8 bg-green flex align-items-center justify-center"
          >
            <IoCloseOutline />
          </div>
          <Link href="/">
            <Image src="/logo.svg" height={36} width={90} alt="." />
          </Link>
          <div>
            {links.map((link, index) => {
              return (
                <ScrollLink
                  to={link.path}
                  offset={link.offset}
                  smooth={false}
                  key={index}
                  className="flex items-center gap-x-3 my-8"
                >
                  <div className={`${iconStyles}`}>{link.icon}</div>
                  <div className={`${iconStyles}`}>{link.name}</div>
                </ScrollLink>
              );
            })}
          </div>
          <ScrollLink to="reservation" smooth offset={-150}>
            <Button variant="orange">رزرو میز</Button>
          </ScrollLink>
        </div>
      </aside>
    </div>
  );
};

export default NavMobile;
