import classes from "./services.module.css";
import Card from "./Card";
import img1 from "../../public/img/4.PNG";
import img2 from "../../public/img/5.PNG";
import img3 from "../../public/img/6.PNG";
const Services = () => {
  return (
    <div className={classes.container}>
      <hr className={classes.line} />
      <Card
        head="Think classic lorem ipsum is passé?"
        description="The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content."
        url={img2}
      />
      <hr className={classes.line} />

      <Card
        className={classes.flexD}
        head="Translation by H. Rackham:"
        description="The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it's seen all around the web; on templates, websites, and stock designs. Use our generator to get your own, or read on for the authoritative history of lorem ipsum."
        url={img1}
      />
      <hr className={classes.line} />

      <Card
        head="HISTORY, PURPOSE AND USAGE"
        description=" sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        url={img3}
      />
    </div>
  );
};

export default Services;
