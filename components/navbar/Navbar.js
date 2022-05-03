import classes from "../navbar/Navbar.module.css";
import useWindowSize from "../../customHooks/useWindowSize";
import { useState } from "react";

const NavOne = (props) => {
  const { width } = useWindowSize();
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState({
    isShow: false,
    whichIsShow: "",
  });

  const handelClick = () => {
    setShow({ isShow: false, whichIsShow: "" });
    setOpen(!open);
  };

  const shoClickHandler = () => {
    setShow({ isShow: false, whichIsShow: "" });
  };
  const handelItemClick = (e) => {
    const whichIsShow = e.target.innerHTML;
    const isShow = !isShow;
    setShow({ whichIsShow, isShow });
  };
  if (!open && width <= 800) {
    return (
      <nav className={classes.nav}>
        <button
          BtnIsRun={open}
          className={classes.button}
          onClick={handelClick}
        >
          Menu
        </button>
      </nav>
    );
  }

  return (
    <Navbar closeBtn={<CloseBtn handelClick={handelClick} />}>
      {show.isShow && width <= 800 && (
        <div className={classes.backDiv}>
          <button className={classes.backButton} onClick={shoClickHandler}>
            &lt; Back
          </button>
        </div>
      )}
      {show.whichIsShow === "" ? (
        <>
          <NavItem
            show={show.whichIsShow === "Public Sector" ? show.isShow : false}
            // show={show.isShow}
            whichIsShow={show.whichIsShow}
            onClick={handelItemClick}
          >
            Public Sector
          </NavItem>
          <NavItem
            show={
              show.whichIsShow === "Sales and Marketing" ? show.isShow : false
            }
            // show={show.isShow}
            whichIsShow={show.whichIsShow}
            onClick={handelItemClick}
          >
            Sales and Marketing
          </NavItem>
          <NavItem
            show={show.whichIsShow === "Finance" ? show.isShow : false}
            // show={show.isShow}
            whichIsShow={show.whichIsShow}
            onClick={handelItemClick}
          >
            Finance
          </NavItem>
          <NavItem
            show={show.whichIsShow === "Small Business" ? show.isShow : false}
            // show={show.isShow}
            whichIsShow={show.whichIsShow}
            onClick={handelItemClick}
          >
            Small Business
          </NavItem>
          <NavItem
            show={show.whichIsShow === "Our Company" ? show.isShow : false}
            // show={show.isShow}
            whichIsShow={show.whichIsShow}
            onClick={handelItemClick}
          >
            Our Company
          </NavItem>
        </>
      ) : (
        <NavItem
          // show={show.whichIsShow === "Our Company" ? show.isShow : false}
          show={show.isShow}
          whichIsShow={show.whichIsShow}
          onClick={handelItemClick}
        >
          Our Company
        </NavItem>
      )}
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
  const nextMenu = {
    "Public Sector": [
      "Verify Government Suppliers",
      "Manage Procuremeny Risk",
      "Share Investigative",
      "Federal",
      "Analytics Data",
    ],
    "Sales and Marketing": [
      "Clean and Consolidate Data",
      "Reach and Engage Buyers",
      "Reach and Engage Educators",
      "Protect Supply Chains",
      "Investor Relations",
    ],
    Finance: ["Reserch", "Advocacy", "Innovation", "Membership", "Analysis"],
    "Small Business": [
      "Stats",
      "Live Business Identity",
      "Marketplace",
      "Partner",
      "D&B Analytics Studio",
    ],
    "Our Company": [
      "About US",
      "Partner",
      "Services",
      "Events",
      "Pricing Plans",
      "Stats",
    ],
  };
  const { width } = useWindowSize();
  if (width <= 800)
    return (
      <>
        {props.show ? (
          <>
            {nextMenu[props.whichIsShow].map((item, index) => (
              <NavItem key={index}>{item}</NavItem>
            ))}
          </>
        ) : (
          <li onClick={props.onClick} className={classes.il}>
            <a className={classes.a}>{props.children}</a>
          </li>
        )}
      </>
    );

  return (
    <li className={classes.il}>
      <a className={classes.a}>{props.children}</a>
      {width >= 800 && (
        <div className={classes.megaMenu}>
          <ul className={classes.links}>
            {/* {nextMenu[props.whichIsShow].map((item, index) => (
              <MegaMenuItem key={index}> {item}</MegaMenuItem>
            ))} */}
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
