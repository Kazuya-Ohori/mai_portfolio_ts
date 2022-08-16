// pages/index.js
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import { client } from "../../libs/client";
import type { WorkProps, WorkCategoryProps } from '../../types/works';
import { Layout } from '../../layouts/Layout';
import styles from '../../styles/Works.module.sass';
import Image from 'next/image';
import { formatDate, DateFormat } from '../../libs/utils';
import { Tab } from '@src/components/ui';

type WorksProps = {
  works: WorkProps[];
  // categories: WorkCategoryProps;
}

export default function Works({ works } : WorksProps) {
  const getThumbnail = (images:any) => {
    return images[0].image.url;
  }
  const router = useRouter();
	const category = router.query.category || "";
  const categories = works.map(item => item["category"]).filter((e, index, self) => {
    return self.findIndex((el) => el.id === e.id) === index;
  });

  const filteredWorks = category ? works.filter(item => item.category.id === category) : works;

  return (
    <Layout>
      <main className={`${styles.main} ${styles.top}`}>
        <article className={styles.article}>
          <section className={styles.section}>
            <h1 className={styles.section__title}>WORKS</h1>
            <Tab currentCategory={category} categories={categories} />
            <div className={styles.section__content}>
              <ul className={styles.worksList}>
                {filteredWorks.map((work) => (
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
  // category[equals]cosplay
  // queries: { filters: 'category[equals]cosplay' }
  const data = await client.get({ endpoint: "works" });

  return {
    props: {
      works: data.contents
    },
  };
};
