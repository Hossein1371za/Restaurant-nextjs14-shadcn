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
    <section className="relative py-12 xl:py-24 xl:bg-menu" id="menu">
      <div className="container max-w-[1280px] mx-auto">
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ onse: false, amount: 0.2 }}
          className="max-w-[570px] mx-auto text-center xl:text-right"
        >
          <h2 className="mb-3">آیتم های محبوب</h2>
          <Link
            href="/"
            className="text-green flex justify-center xl:justify-start items-center mb-16"
          >
            دیدن همه
            <IoIosArrowRoundBack className="text-3xl " />
          </Link>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ onse: false, amount: 0.2 }}
          className="grid grid-cols-1 gap-[30px] md:grid-cols-2 md:gap-[15px] xl:grid-cols-4"
        >
          {menu.map((item, index) => {
            return (
              <div
                key={index}
                className="max-w-[270px] bg-white shadow-primary mx-auto lg:mx-0 group"
              >
                <div className="overflow-hidden">
                  <Image
                    src={item.img}
                    width={270}
                    height={270}
                    alt="."
                    className="group-hover:scale-110 duration-200"
                  />
                </div>
                <div className="pt-[20px] pb-[28px] px-[30px]">
                  <Link href="/">
                    <h3 className="text-black mb-[14px]">{item.title}</h3>
                  </Link>
                  <div className="number text-xl font-semibold text-orange">
                    {item.price}
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;
