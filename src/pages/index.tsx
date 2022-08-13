// pages/index.js
import Link from "next/link";
import { client } from "../libs/client";
import type { WorkProps } from '../types/works';
// import type { ReactElement } from 'react'
import { Layout } from '../layouts/Layout';
// import type { NextPageWithLayout } from './_app';
import styles from '../styles/Top.module.sass';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { formatDate, DateFormat } from '../libs/utils';



type WorksProps = {
  works: WorkProps[];
}

export default function Home({ contents }: any) {
  console.log(contents);
  const mainVisualStyle = (images:any) => {
    return {
      backgroundImage: `url(${images[0].image.url})`
    }
  };

  // const getThumbnail = (images:any) => {
  //   console.log(images);
  //   return images[0].image.url;
  // }

  return (
    <Layout>
      <main className={`${styles.main} ${styles.top}`}>
        <article className={styles.article}>
          <section className={styles.section__mv}>
            <h1 className={styles.section__title}>
              <Image src={"/img/logo.svg"} alt="Mai Valdenaire Profile" layout="fill" objectFit="contain"/>
            </h1>
            <div className={styles.section__mvFigure} style={mainVisualStyle(contents.main_visual.images)}>
              <span className={styles.badge}>
                <div className={styles.badge__img}>
                  <Image  src={"/img/icon_latest.svg"} alt="Latest" layout="fill" objectFit="contain"/>
                </div>
              </span>
            </div>
            <div className={styles.section__detail}>
              <div className={styles.section__detailTitle}>
                <h2>{contents.main_visual.title}</h2>
                <span className={styles.section__detailDate}>{formatDate(contents.main_visual.created_date, DateFormat.YY_MM_DD)}</span>
              </div>
              <div className={styles.section__detailFooter}>
                <Link href={`/works/${contents.main_visual.id}`}>
                  <a className={styles.morelink}>more</a>
                </Link>
              </div>
            </div>
          </section>
          <section className={`${styles.about}`}>
            <h1 className={styles.section__title}>
              <Image src={"/img/ttl_about.svg"} alt="about" layout="fill" objectFit="contain"/>
            </h1>
            <div className={styles.section__content}>
              <div className={styles.section__figure}>
                <Image className={styles.section__img} src={contents.about_image.url} alt="about" layout="fill" objectFit="contain"/>
              </div>
              <div className={styles.section__detail}>
                <div className={styles.section__detailText}
                   dangerouslySetInnerHTML={{
                    __html: `${contents.description_en}`,
                  }}
                />
                <div className={`${styles.section__detailText} ${styles.section__detailTextJa}`}
                   dangerouslySetInnerHTML={{
                    __html: `${contents.description_ja}`,
                  }}
                />
              </div>
              <div className={styles.section__detail}>
                <div className={styles.section__detailTitle}>
                  <h2>EMAIL</h2>
                </div>
                <div className={styles.section__detailText}>
                  <p>mai.valdenaire@gmail.com</p>
                </div>
              </div>
              <div className={styles.section__detail}>
                <div className={styles.section__detailTitle}>
                  <h2>SNS</h2>
                </div>
                <div className={`${styles.section__detailList} ${styles.snsList}`}>
                  <div className={styles.snsList__item}>
                    <a href="https://www.linkedin.com/in/mai-valdenaire-19153768/" target="_blank">
                      <span><FontAwesomeIcon icon={faLinkedinIn}/></span>Mai Valdenaire</a>
                  </div>
                  <div className={styles.snsList__item}><a href="https://twitter.com/Saimmm" target="_blank"><span><FontAwesomeIcon icon={faTwitter}/></span>@saimmm</a></div>
                  <div className={styles.snsList__item}><a href="https://www.facebook.com/mai.valdenaire" target="_blank"><span><FontAwesomeIcon icon={faFacebook}/></span>mai.valdenaire</a></div>
                  <div className={styles.snsList__item}><a href="https://www.instagram.com/mai.valdenaire/" target="_blank"><span
                        className={styles.snsIconIg}><FontAwesomeIcon icon={faInstagram}/></span>@mai.valdenaire</a></div>
                  <div className={styles.snsList__item}><a href="https://note.com/saimmm" target="_blank">
                    <span className={styles.snsIconNote}>
                      <i className={styles.fa}><Image src={"/img/icon_note.svg"} alt="note" layout="fill" objectFit="contain"/></i></span>ヴァルまい</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </article>
      </main>
    </Layout>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "top" });

  return {
    props: {
      contents: data.contents[0],
    },
  };
};
