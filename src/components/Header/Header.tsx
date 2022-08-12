import { memo, useState, useEffect } from 'react';
import styles from "./Header.module.css";

export const Header = memo(() => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuFunction = () => {
    setOpenMenu(!openMenu);
  }

  useEffect(() => {
    const body = document.getElementById('app');
    if(body) {
      body.style.position = openMenu ? 'fixed' : '';
      body.style.width = openMenu ? '100%' : '';
    }
  }, [openMenu]);

  return (
    <header className={styles.header}>
      <div className={styles.header__inner}>
        <nav className={styles.header__nav}>
          <ul className={styles.header__navList}>
            <li className={styles.header__navItem}>GUI Design</li>
            <li className={styles.header__navItem}>Graphic</li>
            <li className={styles.header__navItem}>Cosplay</li>
          </ul>
        </nav>
        <div className={`${styles.header__menuTrigger} ${openMenu && styles.active}`} onClick={menuFunction}><span></span><span></span><span></span></div>
      </div>
      <nav className={`${styles.header__menu} ${styles.hasLoaded} ${openMenu && styles.active}`}>
        <div className={styles.header__menuBox}>
          <a className={styles.header__menuHome} href="/"><span>HOME</span></a>
        </div>
        <div className={styles.header__menuBox}>
          <h2 className={styles.header__menuTitle}><a className={styles.header__menuTitlelink} href="#">WORK</a></h2>
          <ul className={styles.header__menuList}>
            <li className={styles.header__menuItem}><a className={styles.header__menuLink} href="#">Web</a></li>
            <li className={styles.header__menuItem}><a className={styles.header__menuLink} href="#">App</a></li>
            <li className={styles.header__menuItem}><a className={styles.header__menuLink} href="#">Graphic</a></li>
            <li className={styles.header__menuItem}><a className={styles.header__menuLink} href="#">Cosplay</a></li>
            <li className={styles.header__menuItem}><a className={styles.header__menuLink} href="#">Etc</a></li>
          </ul>
        </div>
        <div className={styles.header__menuBox}>
          <h2 className={styles.header__menuTitle}>
            <a className={styles.header__menuTitlelink} href="#">ABOUT</a>
          </h2>
        </div>
        <div className={styles.header__menuFooter}>
          <div className={`${styles.header__menuTrigger} ${styles.header__menuTriggerClose}`} onClick={menuFunction}>
            <span></span><span></span>
          </div>
          </div>
      </nav>
    </header>
  )
})

Header.displayName = 'header';