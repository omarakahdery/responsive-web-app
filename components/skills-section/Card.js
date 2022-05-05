import React from "react";
import classes from "./Skills.module.css";

const Card = (props) => {
  return (
    <div className={classes.card}>
      {props.childern}
      <h2 className={classes.title}>{props.title}</h2>
      <p className={classes.text}>{props.text}</p>
      <button className={classes.button}>Get Started</button>
    </div>
  );
};

export default Card;
