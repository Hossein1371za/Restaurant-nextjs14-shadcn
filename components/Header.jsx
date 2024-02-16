"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import Image from "next/image";

import Nav from "./Nav";
import NavMobile from "./NavMobile";
import { Button } from "./ui/button";

const Header = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY) > 100;
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`${
        active ? "bg-black-heavy py-4" : "bg-none py-8"
      } text-white fixed top-0 max-w-[1440px] right-0 w-full mx-auto z-50 left-0 transition-all duration-200`}
    >
      <div className="container max-w-[1280px] mx-auto">
        <div className="flex flex-row-reverse xl:flex-row items-center justify-between">
          <Link className="z-60" href="/">
            <Image src="/logo.svg" width={75} height={30} alt="." />
          </Link>
          <Nav containerStyles="hidden lg:flex gap-x-12 text-white" />
          <ScrollLink to="reservation" smooth={true}>
            <Button variant="orange" size="sm">
              رزرو میز
            </Button>
          </ScrollLink>
          <NavMobile containerStyles='lg:hidden' iconStyles="text-3xl"/>
        </div>
      </div>
    </header>
  );
};

export default Header;
