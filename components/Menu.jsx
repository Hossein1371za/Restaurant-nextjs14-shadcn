"use client"

import Image from "next/image"
import Link from "next/link"
import {IoIosArrowForward} from "react-icons/io"

import {motion} from "framer-motion"
import { fadeIn } from "../variants"
const menu=[
    {
        img:"/menu/item-1.png",
        title:"دسر بلوبری",
        price:"250,000 تومان",
    },
    {
        img:"/menu/item-2.png",
        title:"پیراشکی",
        price:"120,000 تومان",
    },
    {
        img:"/menu/item-3.png",
        title:"خوراک خرچنگ",
        price:"1,500,000 تومان",
    },
    {
        img:"/menu/item-4.png",
        title:"کیک پرتغالی",
        price:"100,000 تومان",
    },
]

const Menu = () => {
  return (
    <div>Menu</div>
  )
}

export default Menu