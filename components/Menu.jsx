"use client";

import Image from "next/image";
import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";
const menu = [
  {
    img: "/menu/item-1.png",
    title: "دسر بلوبری",
    price: "250,000 تومان",
  },
  {
    img: "/menu/item-2.png",
    title: "پیراشکی",
    price: "120,000 تومان",
  },
  {
    img: "/menu/item-3.png",
    title: "خوراک خرچنگ",
    price: "1,500,000 تومان",
  },
  {
    img: "/menu/item-4.png",
    title: "کیک پرتغالی",
    price: "100,000 تومان",
  },
];

const Menu = () => {
  return (
    <section className="relative py-12 xl:py-24 lg:bg-menu" id="menu">
      <div className="container mx-auto">
        <div>
          <h2>آیتم های محبوب</h2>
          <Link href="/" className="text-green">
            دیدن همه
            <IoIosArrowRoundBack />
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-[30px] md:grid-cols-3 md:gap-[15px] xl:grid-cols-4">
          {menu.map((item, index) => {
            return (
              <div key={index} className="max-w-[270px] bg-white shadow-primary mx-auto lg:mx-0 group">
                <div>
                  <img src={item.img} width={270} height={270} alt="." />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Menu;
