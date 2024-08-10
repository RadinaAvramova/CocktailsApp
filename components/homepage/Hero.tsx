"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import CustomButton from "../CustomButton";

const Hero = () => {
  return (
    <header
      id="hero"
      className="flex w-full justify-center overflow-hidden bg-[url('/hero-background.png')] bg-cover px-5 lg:px-[6.25rem] xl:pt-20"
    >
      <div className="homepage-content-max-width flex w-full flex-col items-center xl:flex-row ">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-10 flex w-full flex-col xl:max-w-[44rem] xl:shrink-0 xl:pt-10"
        >
          <p className="base-20 self-center  xl:self-start">
            Beverages for connoisseurs
          </p>
          <h1 className="hero-heading">
            Raise Your Glass Begin a{" "}
            <span className="text-orange-light">Flavorful Cocktail</span>{" "}
            Journey
          </h1>
          <CustomButton
            additionalStyles="mt-10 h-12 gap-2.5 bg-orange-light sm:h-16 xl:w-[17.375rem]"
            scrollTo="all-drinks"
          >
            <span className="medium-20">Check Collections</span>
            <Image
              src="/icons/arrow-down.svg"
              height={10}
              width={10}
              alt="Arrow pointing down"
            />
          </CustomButton>
        </motion.div>
        <motion.figure
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex h-fit w-full max-w-[35rem] shrink-0 items-end xl:mt-20"
        >
          <Image
            priority
            src="/drinks-graphic.png"
            alt="A refreshing orange cocktail in a glass"
            height={618}
            width={600}
            className="object-contain"
          />
        </motion.figure>
      </div>
    </header>
  );
};

export default Hero;
