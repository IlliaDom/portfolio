import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { ImTelegram, ImLinkedin } from "react-icons/im";
import { IoLogoInstagram } from "react-icons/io";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto flex justify-center items-center">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#6ee7b7]" />
          <div className="w-1 sm:h-80 h-40 green-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm&nbsp;<span className="text-[#6ee7b7]">Illia</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop user interfaces,
            <br className="sm:block hidden" /> web and mobile applications
          </p>
          <div className="flex flex-row items-center justify-start">
            <div
              className="m-3 cursor-pointer z-10"
              onClick={() => window.open("https://t.me/I_Domaratskyi")}
            >
              <ImTelegram size={20} />
            </div>
            <div
              className="m-3 cursor-pointer z-10"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/illia-domaratskyi-930b81209/"
                )
              }
            >
              <ImLinkedin size={20} />
            </div>
            <div
              className="m-3 cursor-pointer z-10"
              onClick={() =>
                window.open(
                  "https://instagram.com/_domaratskyi?igshid=NTc4MTIwNjQ2YQ=="
                )
              }
            >
              <IoLogoInstagram size={25} />
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-[60%] w-[100%] h-[45%] xs:mt-[150px] mt-[50px] max-w-[1000px]">
        <ComputersCanvas />
      </div>
      <div className="absolute xs:bottom-10 bottom-24 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[65px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
