// pages/works/[id].js
import { GetStaticPaths, GetStaticProps } from "next";
import { client } from "../../libs/client";
import type { WorkProps } from '../../types/works';

type workProps = {
  work: WorkProps;
}

export default function WorkId({ work }: workProps) {
  console.log(work);
  return (
    <main>
      <h1>{work.title}</h1>
      <p>{work.description}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: `${work.category}`,
        }}
      />
    </main>
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