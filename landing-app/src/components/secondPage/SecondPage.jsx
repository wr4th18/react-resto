import React from "react";
import { SwiperSlider } from "./SwiperSlider";
import "./secondPage.css";
import { motion } from "framer-motion";

const stormVariants = {
  hidden: { x: "-100vw" },
  show: {
    x: 0,
    transition: {
      delay: 0.5,
      type: "spring",
    },
  },
};

const SecondPage = () => {
  return (
    <section className="container second-page">
      <motion.div
        variants={stormVariants}
        initial="hidden"
        animate="show"
        className="choose"
      >
        <p className="numbers">
          1 2 <span>3</span>
        </p>
        <h1>
          choose your <br /> ingredients please
        </h1>
        <button className="btn btn-primary next">next</button>
      </motion.div>
      <SwiperSlider />
    </section>
  );
};

export default SecondPage;
