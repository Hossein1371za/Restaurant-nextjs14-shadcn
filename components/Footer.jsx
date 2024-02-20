"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <motion.footer
    variants={fadeIn("up",0.3)}
    initial="hidden"
    whileInView={"show"}
    viewport={{once:false,amount:0.2}}
    className="bg-footer bg-cover bg-no-repeat text-white pt-16">
      <div className="container mx-auto">
        <div className="flex flex-col justify-between xl:flex-row">
          <div className="w-[300px] mb-8 xl:mb-0">
            <Link href="/">
              <Image src="/logo.svg" width={90} height={36} alt="." />
            </Link>
          </div>
          <div className="flex-1 text-center grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[50px] mb-8 xl:mb-16">
            <div>
                <h4 className="font-semibold mb-3">وبلاگ</h4>
                <ul className="flex flex-col gap-y-6 text-sm">
                    <li>
                        <Link href="/">لورم ایپسوم متن ساختگی</Link>
                    </li>
                    <li>
                        <Link href="/">لورم ایپسوم متن ساختگی</Link>
                    </li>
                    <li>
                        <Link href="/">لورم ایپسوم متن ساختگی</Link>
                    </li>
                    <li>
                        <Link href="/">لورم ایپسوم متن ساختگی</Link>
                    </li>
                </ul>
            </div>
            <div>
                <h4 className="font-semibold mb-3">ایتم</h4>
                <ul className="flex flex-col gap-y-6 text-sm">
                    <li>
                        <Link href="/">لورم ایپسوم متن ساختگی</Link>
                    </li>
                    <li>
                        <Link href="/">لورم ایپسوم متن ساختگی</Link>
                    </li>
                    <li>
                        <Link href="/">لورم ایپسوم متن ساختگی</Link>
                    </li>
                    <li>
                        <Link href="/">لورم ایپسوم متن ساختگی</Link>
                    </li>
                </ul>
            </div>
            <div>
            <h4 className="font-semibold mb-3">رسانه های اجتماعی</h4>
            <ul className="flex flex-col gap-y-6 text-sm">
                    <li>
                        <Link href="/">Youtube</Link>
                    </li>
                    <li>
                        <Link href="/">Facebook</Link>
                    </li>
                    <li>
                        <Link href="/">Instagram</Link>
                    </li>
                    <li>
                        <Link href="/">LinkedIn</Link>
                    </li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
