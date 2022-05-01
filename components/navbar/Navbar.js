import React from "react";
import { useState } from "react";
import classes from "../navbar/Navbar.module.css";
import useWindowSize from "../../customHooks/useWindowSize";

const Navbar = (props) => {
  const { width } = useWindowSize();
  const [open, setOpen] = useState(false);
  console.log(open);
  const handelClick = () => {
    setOpen(!open);
  };
  if (width <= 800)
    return (
      <nav className={classes.nav}>
        <button className={classes.button} onClick={handelClick}>
          Menu
        </button>
      </nav>
    );

  return (
    <nav className={classes.nav}>
      <ul className={classes.ul}>
        <NavItem> Public Sector </NavItem>
        <NavItem> Sales & Marketing </NavItem>
        <NavItem> Finance </NavItem>
        <NavItem> Small Business </NavItem>
        <NavItem> Our Company </NavItem>
      </ul>
    </nav>
  );
};

export default Navbar;
const NavItem = (props) => {
  const { width } = useWindowSize();
  const [open, setOpen] = useState(false);

  if (width <= 800)
    return (
      <button className={classes.button} onClick={handelClick}>
        Menu
      </button>
    );
  return (
    <il className={classes.il}>
      <a className={classes.a} onClick={() => setOpen(!open)}>
        {props.children}
      </a>
      {(width >= 800 || open) && (
        <div className={classes.megaMenu}>
          <ul className={classes.links}>
            <MegaMenuItem> 2d2d2d2d Sector </MegaMenuItem>
            <MegaMenuItem> 2d2d2d2d & Marketing </MegaMenuItem>
            <MegaMenuItem> 2d2d2d2d </MegaMenuItem>
            <MegaMenuItem> 2d2d2d2d Business </MegaMenuItem>
            <MegaMenuItem> 2d2d2d2d Company </MegaMenuItem>
          </ul>
        </div>
      )}
    </il>
  );
};

const MegaMenuItem = (props) => {
  return (
    <il>
      <a>{props.children}</a>
    </il>
  );
};
