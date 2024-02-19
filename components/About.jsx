"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import { Button } from "./ui/button";

const About = () => {
  return (
    <section
      className="grid grid-cols-1 xl:grid-cols-2 gap-[74px] p-8 md:p-12 xl:p-0 items-center"
      id="about"
    >
      <motion.div
        variants={fadeIn("left", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="xl:pr-[100px] text-center xl:text-right xl:w-full"
      >
        <h1 className="mb-9">درباره رستوران های زنجیره ای ما </h1>
        <p className="mb-8">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد ستون و
          سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
        </p>
        <p className="mb-10">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد ستون و
          سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
        </p>
        <Button>اطلاعات بیشتر</Button>
      </motion.div>
      <motion.div 
      variants={fadeIn("right", 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}>
        <Image
          src="/about/img.png"
          width={705}
          height={771}
          className="hidden xl:flex"
          alt="."
        />
      </motion.div>
    </section>
  );
};

export default About;
