import Link from "next/link";
import { useRouter } from "next/router";
import { memo, useState, useEffect, useContext } from "react";
import styles from "./Header.module.css";
import type { WorkProps, WorkCategoryProps } from "@/types/works";

type MenuProps = {
  id: string;
  name: string;
};

export const Header = memo(() => {
  const router = useRouter();
  console.log(router.pathname);
  const category =
    typeof router.query.category === "string"
      ? router.query.category.toUpperCase()
      : "ALL";
  const [openMenu, setOpenMenu] = useState(false);
  const [menus, setMenus] = useState<MenuProps[]>([]);
  const menuFunction = () => {
    setOpenMenu(!openMenu);
  };

  useEffect(() => {
    (async () => {
      const response = await fetch("/api/works");
      const data = await response.json();
      const categories: any[] = data.works
        .map((item: WorkProps) => item["category"])
        .filter((e: any, index: number, self: any) => {
          return self.findIndex((el: WorkProps) => el.id === e.id) === index;
        });
      setMenus(categories);
    })();
  }, [setMenus]);

  useEffect(() => {
    const body = document.getElementById("app");
    if (body) {
      body.style.position = openMenu ? "fixed" : "";
      body.style.width = openMenu ? "100%" : "";
    }
  }, [openMenu]);

  return (
    <header className={styles.header}>
      <div className={styles.header__inner}>
        <nav className={styles.header__nav}>
          {router.pathname.indexOf("/works") != -1 ? (
            <ul className={`${styles.header__navList} ${styles.header__bc}`}>
              <li
                className={`${styles.header__navItem} ${styles["header__bc-item"]}`}
              >
                <Link href='/'>
                  <a>HOME</a>
                </Link>
              </li>
              <li
                className={`${styles.header__navItem} ${styles["header__bc-item"]}`}
              >
                <Link href='/works'>
                  <a>WORKS</a>
                </Link>
              </li>
              <li className={styles.header__navItem}>{category}</li>
            </ul>
          ) : (
            <ul className={styles.header__navList}>
              <li className={styles.header__navItem}>GUI Design</li>
              <li className={styles.header__navItem}>Graphic</li>
              <li className={styles.header__navItem}>Cosplay</li>
            </ul>
          )}
        </nav>
        <div
          className={`${styles.header__menuTrigger} ${
            openMenu && styles.active
          }`}
          onClick={menuFunction}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <nav
        className={`${styles.header__menu} ${styles.hasLoaded} ${
          openMenu && styles.active
        }`}
      >
        <div className={styles.header__menuBox}>
          <Link href='/'>
            <a className={styles.header__menuHome} onClick={menuFunction}>
              <span>HOME</span>
            </a>
          </Link>
        </div>

        <div className={styles.header__menuBox}>
          <h2 className={styles.header__menuTitle}>
            <Link href='/works'>
              <span onClick={menuFunction}>WORK</span>
            </Link>
          </h2>
          <ul className={styles.header__menuList}>
            {menus?.map((item) => (
              <li className={styles.header__menuItem} key={item.id}>
                <Link
                  className={styles.header__menuLink}
                  href={`/works?category=${item.id}`}
                >
                  <a onClick={menuFunction}>{item.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.header__menuBox}>
          <h2 className={styles.header__menuTitle}>
            <Link className={styles.header__menuTitlelink} href='/#about'>
              <a onClick={menuFunction}>ABOUT</a>
            </Link>
          </h2>
        </div>
        <div className={styles.header__menuFooter}>
          <div
            className={`${styles.header__menuTrigger} ${styles.header__menuTriggerClose}`}
            onClick={menuFunction}
          >
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    </header>
  );
});

Header.displayName = "header";
