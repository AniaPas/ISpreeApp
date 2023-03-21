import { FC } from "react";
import shops from "./shops.jpg";
import style from "./Header.module.scss";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className={style.headerContainer}>
      <img className={style.shopsImg} src={shops} alt='womanShopping' />
      <div className={style.logoWrapper}>
        <Link to='/' className={style.logo}>
          I SPREE
        </Link>
      </div>
    </div>
  );
};
