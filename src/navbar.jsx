import React from 'react';
import "./Navbar.module.css';

const Navbar = () => {
  return (
    <ul className={styles.navbar}>
      <li className={styles.navItem}>
        <button className={styles.navButton}>Ecosystem</button>
      </li>
      <li className={styles.navItem}>
        <button className={styles.navButton}>Products</button>
      </li>
      <li className={styles.navItem}>
        <button className={styles.navButton}>zNode</button>
      </li>
      <li className={styles.navItem}>
        <button className={styles.navButton}>Build</button>
      </li>
      <li className={styles.navItem}>
        <button className={styles.navButton}>About Us</button>
      </li>
    </ul>
  );
};

export default Navbar;
