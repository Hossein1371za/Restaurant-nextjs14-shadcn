"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

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
      className={`${active ? "bg-black-heavy py-4" : "bg-none py-8"} text-white fixed top-0 right-0 w-full z-50 left-0 transition-all duration-200`}
    >
      
    </header>
  );
};

export default Header;
