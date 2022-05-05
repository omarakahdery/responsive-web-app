import React from "react";
import classes from "../skills-section/Skills.module.css";
import Card from "./Card";

const Skills = () => {
  return (
    <section className={classes.container}>
      <Card
        title={"Lorem ipsum dolor"}
        text={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
      ></Card>
      <Card
        title={"Lorem ipsum dolor"}
        text={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
      ></Card>
      <Card
        title={"Lorem ipsum dolor"}
        text={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
      ></Card>
    </section>
  );
};

export default Skills;
