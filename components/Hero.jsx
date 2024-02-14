"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section
      className="bg-hero1 xl:bg-hero bg-no-repeat relative xl:bg-cover xl:h-[1098px] py-40 pb-32 xl:py-0"
      id="home"
    >
      <div className="container max-w-[1280px] mx-auto">
        {/* text and image */}
        <div className="flex items-center xl:h-[960px]">
          {/* text */}
          <div className="w-full xl:max-w-[460px] text-center xl:text-right">
            <motion.h1
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ onse: false, amount: 0.4 }}
              className="text-white mb-7"
            >
              رستوران های زنجیره ای <br />
              نکست جی اس
            </motion.h1>
            <motion.p
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ onse: false, amount: 0.4 }}
              className="text-white font-semibold mb-7"
            >
              توسط : <span className="text-orange">حسین زحمتکشان</span>
            </motion.p>
            <motion.p
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ onse: false, amount: 0.4 }}
              className="text-white mb-12 max-w-lg mx-auto xl:max-w-none xl:mx-0"
            >
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
            </motion.p>
            <motion.div
              variants={fadeIn("down", 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ onse: false, amount: 0.4 }}
            >
              <Button>شروع سفارش</Button>
            </motion.div>
          </div>
          {/* image */}
          <motion.div
          variants={fadeIn('up',0.8)}
          initial='hidden'
          whileInView={'show'}
          viewport={{onse:false,amount:0.1}}
          className="hidden xl:flex xl:absolute xl:top-[200] xl:left-0">
            <Image src="/hero/plate.png" width={700} height={682} alt="." />
          </motion.div>
        </div>
      </div>
      <motion.div
      variants={fadeIn('up',1.2)}
      initial='hidden'
      whileInView={'show'}
      viewport={{onse:false,amount:0.1}}
      className="hidden xl:flex xl:relative xl:-top-36">
        <Image src="/hero/coffee.png" width={386} height={404} alt="." />
      </motion.div>
    </section>
  );
};

export default Hero;
