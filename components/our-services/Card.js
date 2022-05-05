import classes from "./services.module.css";
import Image from "next/image";
const Card = (props) => {
  return (
    <div className={`${classes.wrapper} ${props.className}`}>
      <div className={classes.a}>
        <h2 className={classes.head}>{props.head}</h2>
        <p className={classes.description}>{props.description}</p>
      </div>
      <div className={classes.b}>
        <Image src={props.url} />
      </div>
    </div>
  );
};

export default Card;
