import Link from "next/link";
import { memo, useState, useEffect } from "react";
import styles from "./Tab.module.sass";

type CategoryProps = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  name: string;
};

type TabProps = {
  categories: CategoryProps[];
  currentCategory: string | string[];
};

export const Tab = memo(({ categories, currentCategory }: TabProps) => {
  return (
    <div className={styles.categoryTab}>
      <ul className={styles.categoryTab__list}>
        <li className={styles.categoryTab__item}>
          <Link href='/works/'>
            <a
              className={`${styles.categoryTab__link} ${styles.section__cat} ${
                currentCategory === "" && styles.current
              }`}
            >
              All
            </a>
          </Link>
        </li>
        {categories.map((item) => (
          <li className={styles.categoryTab__item} key={item.id}>
            <Link href={`/works/?category=${item.id}`}>
              <a
                className={`${styles.categoryTab__link} ${
                  styles.section__cat
                } ${currentCategory === item.id && styles.current}`}
              >
                {item.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
});

Tab.displayName = "tab";
