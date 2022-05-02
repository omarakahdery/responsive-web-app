import classes from "../navbar/Navbar.module.css";
import useWindowSize from "../../customHooks/useWindowSize";
import { useState } from "react";

const NavOne = (props) => {
  const { width } = useWindowSize();
  const [open, setOpen] = useState(false);
  const handelClick = () => {
    setOpen(!open);
  };
  if (!open && width <= 800) {
    return (
      <nav className={classes.nav}>
        <button className={classes.button} onClick={handelClick}>
          Menu
        </button>
      </nav>
    );
  }
  return (
    <Navbar closeBtn={<CloseBtn handelClick={handelClick} />}>
      <NavItem> Public Sector </NavItem>
      <NavItem> Sales & Marketing </NavItem>
      <NavItem> Finance </NavItem>
      <NavItem> Small Business </NavItem>
      <NavItem> Our Company </NavItem>
    </Navbar>
  );
};

const Navbar = (props) => {
  const { width } = useWindowSize();

  const styles = width <= 800 ? classes.navModil : classes.nav;
  return (
    <nav className={styles}>
      {props.closeBtn}
      <ul className={classes.ul}>{props.children}</ul>
    </nav>
  );
};
const CloseBtn = (props) => {
  const { width } = useWindowSize();

  if (width <= 800)
    return (
      <>
        <div className={classes.title}>Nav Menu</div>
        <button onClick={props.handelClick} className={classes.closeBtn}>
          X
        </button>
        <hr />
      </>
    );
};
const NavItem = (props) => {
  const { width } = useWindowSize();
  if (width <= 800)
    return (
      <li className={classes.il}>
        <a className={classes.a}>{props.children}</a>
      </li>
    );
  return (
    <li className={classes.il}>
      <a className={classes.a}>{props.children}</a>
      {width >= 800 && (
        <div className={classes.megaMenu}>
          <ul className={classes.links}>
            <MegaMenuItem> 2d2d2d2d Sector </MegaMenuItem>
          </ul>
        </div>
      )}
    </li>
  );
};
const MegaMenuItem = (props) => {
  return (
    <li>
      <a>{props.children}</a>
    </li>
  );
};
export default NavOne;
