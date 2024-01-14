import React from "react";
import styles from "./header.module.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
const navigation = useNavigate()

const goBasket = () => {
    navigation('/basket')
}

  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <h1>LOGO</h1>
        <div className={styles.navBtns}>
          <button className={styles.navBtn}>Home</button>
          <button className={styles.navBtn}>About Us</button>
          <button className={styles.navBtn}>Contact</button>
          <button className={styles.navBtn} onClick={goBasket}>Basket</button>
          <button className={styles.navBtn}>Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
