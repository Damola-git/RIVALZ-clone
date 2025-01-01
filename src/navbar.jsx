import React, { useState } from 'react';
import "./Navbar.module.css';

const Navbar = () => {
  const [buttonColor, setButtonColor] = useState('initialColor');

  const handleClick = () => {
    setButtonColor(buttonColor === 'initialColor' ? 'newColor' : 'initialColor');
  };

  return (
    <ul className={styles.navbar}>
      <li className={styles.navItem}>
        <button 
          className={styles.navButton} 
          style={{ color: buttonColor }} 
          onClick={handleClick}
        >
          Ecosystem
        </button>
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
