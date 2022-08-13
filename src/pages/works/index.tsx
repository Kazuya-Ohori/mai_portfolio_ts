// pages/index.js
import { GetStaticProps } from "next";
import Link from "next/link";
import { client } from "../../libs/client";
import type { WorkProps } from '../../types/works';
import { Layout } from '../../layouts/Layout';
import styles from '../../styles/Works.module.sass';
import Image from 'next/image';
import { formatDate, DateFormat } from '../../libs/utils';

type WorksProps = {
  works: WorkProps[];
}

export default function Works({ works } : WorksProps) {
  const getThumbnail = (images:any) => {
    console.log(images);
    return images[0].image.url;
  }
  return (
    <Layout>
      <main className={`${styles.main} ${styles.top}`}>
        <article className={styles.article}>
          <section className={styles.section}>
            <h1 className={styles.section__title}>WORKS</h1>
            <div className={styles.categoryTab}>
              <ul className={styles.categoryTab__list}>
                <li className={styles.categoryTab__item}>
                  <a className={`${styles.categoryTab__link} ${styles.section__cat} ${styles.current}`} href="#">All</a></li>
                <li className={styles.categoryTab__item}>
                  <a className={`${styles.categoryTab__link} ${styles.section__cat}`} href="#">Web</a></li>
                <li className={styles.categoryTab__item}>
                  <a className={`${styles.categoryTab__link} ${styles.section__cat}`} href="#">App</a></li>
                <li className={styles.categoryTab__item}>
                  <a className={`${styles.categoryTab__link} ${styles.section__cat}`} href="#">Graphic</a></li>
                <li className={styles.categoryTab__item}>
                  <a className={`${styles.categoryTab__link} ${styles.section__cat}`} href="#">Cosplay</a></li>
              </ul>
            </div>
            <div className={styles.section__content}>
              <ul className={styles.worksList}>
                {works.map((work) => (
                  <li className={styles.worksItem} key={work.id}>
                    <Link href={`/works/${work.id}`}>
                      <a>
                        <div className={styles.worksItem__figure}>
                          <div className={styles.worksItem__thumb}>
                            <Image src={getThumbnail(work.images)} layout="fill" objectFit="cover"/>
                          </div>
                        </div>
                        <div className={styles.worksItem__info}>
                          <div className={styles.worksItem__desc}>
                            <p>{work.title}</p>
                          </div>
                          <div className={styles.worksItem__date}><span>{formatDate(work.created_date, DateFormat.YY_MM_DD)}</span></div>
                        </div>
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </article>
      </main>
    </Layout>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps:GetStaticProps = async () => {
  const data = await client.get({ endpoint: "works" });

  return {
    props: {
      works: data.contents,
    },
  };
};
