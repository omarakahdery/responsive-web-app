import React from "react";
import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={classes.container}>
      <h1 className={classes.title}>Lorem ipsum dolor sit amet</h1>
      <p className={classes.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.{" "}
      </p>
    </section>
  );
};

export default Hero;
