// pages/works/[id].js
import { GetStaticPaths, GetStaticProps } from "next";
import { client } from "../../libs/client";
import type { WorkProps } from '../../types/works';
import { Layout } from '../../layouts/Layout';
import styles from '../../styles/Works.module.sass';
import Image from 'next/image';
import { formatDate, DateFormat } from '../../libs/utils';

type workProps = {
  work: WorkProps;
}

export default function WorkId({ work }: workProps) {
  return (
    <Layout>
      <main className={`${styles.main} ${styles.works} ${styles.worksDetail}`}>
        <article className={styles.article}>
          <section className="section">
            <h1 className={styles.section__title}>WORKS<span className={styles.section__cat}>{work.category.name}</span></h1>
            {work.images.map((item, index) => (
              <div key={index} className={styles.section__figure}>
                <div className={styles.imageContainer}>
                  <Image src={item.image.url} layout="fill" objectFit="contain"/>
                </div>
              </div>
            ))}
            <div className={styles.section__detail}>
              <div className={styles.section__detailTitle}>
                <h2>{work.title}</h2>
              </div>
              <div className={styles.section__detailFooter}>
                <a className={styles.morelink} href="#">
                  <span className={styles.morelink__text}>Visit  Website</span>
                </a>
              </div>
              <div className={styles.section__detailText}>
                <div className={`${styles.section__detailLabels} ${styles.labels}`}>
                  <p className={styles.labels__title}>{work.label}</p>
                </div>
                <p>{work.description}</p>
                <span className={styles.section__detailDate}>{formatDate(work.created_date, DateFormat.YYMMDD)}</span>
              </div>
            </div>
          </section>
        </article>
      </main>
    </Layout>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths:GetStaticPaths = async () => {
  const data = await client.get({ endpoint: "works" });

  const paths = data.contents.map((content:WorkProps) => `/works/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps:GetStaticProps = async (context) => {
  const id = context.params?.id;
  const data = await client.get({ endpoint: "works", contentId: `${id}` });

  return {
    props: {
      work: data,
    },
  };
};