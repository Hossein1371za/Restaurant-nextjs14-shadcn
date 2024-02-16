"use client";

import React, { useState } from "react";
import { RiMenu2Line, RiHomeFill } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";
import { BiSolidFoodMenu } from "react-icons/bi";
import { FaUsers, FaEnvelope } from "react-icons/fa";

import { Link as ScrollLink } from "react-scroll";
import Image from "next/image";
import Link from "next/link";
import Button from "./ui/button";

const links = [
  {
    icon: <RiHomeFill />,
    Path: "home",
    name: "خانه ",
    offset: 0,
  },
  {
    icon: <BiSolidFoodMenu />,
    Path: "menu",
    name: "منو",
    offset: 0,
  },
  {
    icon: <FaUsers />,
    Path: "about",
    name: "درباره ما",
    offset: -50,
  },
  {
    icon: <FaEnvelope />,
    Path: "contact",
    name: "تماس با ما",
    offset: 0,
  },
];
const NavMobile = ({ containerStyles,iconStyles,linkStyles }) => {
  return <div className={`${containerStyles}`}>NavMobile</div>;
};

export default NavMobile;
