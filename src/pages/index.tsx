// pages/index.js
// import Link from "next/link";
import { client } from "../libs/client";
import type { WorkProps } from '../types/works';
// import type { ReactElement } from 'react'
import { Layout } from '../layouts/Layout';
// import type { NextPageWithLayout } from './_app';
import styles from '../styles/Top.module.sass';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';


type WorksProps = {
  works: WorkProps[];
}

export default function Home({ works }: WorksProps) {
  const mainVisualStyle = {
    backgroundImage: "url('/img/main_visual.jpg')"
  };

  return (
    <Layout>
      <main className={`${styles.main} ${styles.top}`}>
        <article className={styles.article}>
          <section className={styles.section__mv}>
            <h1 className={styles.section__title}>
              <Image src={"/img/logo.svg"} alt="Mai Valdenaire Profile" layout="fill" objectFit="contain"/>
            </h1>
            <div className={styles.section__mvFigure} style={mainVisualStyle}>
              <span className={styles.badge}>
                <div className={styles.badge__img}>
                  <Image  src={"/img/icon_latest.svg"} alt="Latest" layout="fill" objectFit="contain"/>
                </div>
              </span>
            </div>
            <div className={styles.section__detail}>
              <div className={styles.section__detailTitle}>
                <h2>狐路上遊戯</h2><span className={styles.section__detailDate}>2020/02/10</span>
              </div>
              <div className={styles.section__detailFooter}><a className={styles.morelink} href="#">more</a></div>
            </div>
          </section>
          <section className={`${styles.about}`}>
            <h1 className={styles.section__title}>
              <Image src={"/img/ttl_about.svg"} alt="about" layout="fill" objectFit="contain"/>
            </h1>
            <div className={styles.section__content}>
              <div className={styles.section__figure}>
                <Image className={styles.section__img} src={"/img/about.png"} alt="about" layout="fill" objectFit="contain"/>
              </div>
              <div className={styles.section__detail}>
                <div className={styles.section__detailText}>
                  <p><strong>Mai Valdenaire</strong> was born and raised in Japan. After studying graphic design for four
                    years, she decided to make her passion for digital graphic become her life.<br />She&#x27;s a Graphic User
                    Interface Designer.She has been make App,Web service, based in Tokyo and Kyoto.</p>
                </div>
                <div className={styles.section__detailText}>
                  <p>
                    グラフィックユーザーインタフェースのデザイナー。幼少期よりデジタルグラフィックに親しみ、イラストレーションやフォト、グラフィックの制作を行う。自信を被写体として制作・撮影するコスプレのパフォーマンス活動をつづけ、さまざまな世界観に挑んでいる。<br />現在、京都と東京を拠点に日本文化と向き合い、デジタルの融合を模索し、App,webサービスなどの設計、制作などを行っている。
                  </p>
                </div>
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
  const data = await client.get({ endpoint: "works" });

  return {
    props: {
      works: data.contents,
    },
  };
};
