import React from "react";
import { useState } from "react";
import classes from "./Header.module.css";

const Header = () => {
  const [searchIsShow, setSearchIsShow] = useState(false);
  const clickHandler = () => {
    setSearchIsShow(!searchIsShow);
  };
  return (
    <>
      {searchIsShow && <Search onClick={clickHandler} />}
      <div className={classes.header}>
        <div className={classes.logo}>Logo.</div>

        <div className={classes.listwrap}>
          <div className={classes.list}>
            <a> Business Directory</a>
          </div>
          <div className={classes.list}>
            <a> Support</a>
          </div>
          <div className={classes.list}>
            <a> Login</a>
          </div>
        </div>
        <div>
          <button onClick={clickHandler} className={classes.button}>
            Search
          </button>
        </div>
      </div>
    </>
  );
};
export default Header;
const Search = ({ onClick }) => {
  return (
    <div className={classes.searchWraper}>
      <button onClick={onClick} className={classes.closeBtn}>
        X
      </button>
      <hr />
      <input
        className={classes.input}
        placeholder="Search here...."
        type="text"
      ></input>
    </div>
  );
};
