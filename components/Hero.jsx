"use client";
import Image from "next/image";
import { motio } from "framer-motion";
import { fadeIn } from "../variants";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section
      className="bg-hero1 lg:bg-hero bg-no-repeat  bgrota relative md:bg-left xl:bg-cover xl:h-[1098px] py-40 pb-32 xl:py-0"
      id="home"
    >
      <div className="container mx-auto">
        {/* text and image */}
        <div>
            {/* text */}
          <div className="w-full xl:max-w-[460px] text-center">
            <h1 className="text-white mb-7">
              رستوران های زنجیره ای <br />
              نکست جی اس
            </h1>
            <p className="text-white font-semibold mb-7">
              توسط : <span className="text-orange">حسین زحمتکشان</span>
            </p>
            <p className="text-white mb-12 max-w-lg mx-auto xl:max-w-none xl:mx-0">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
