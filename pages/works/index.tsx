// pages/index.js
import { GetStaticProps } from "next";
import Link from "next/link";
import { client } from "../../libs/client";
import type { WorkProps } from '../../types/works';

type WorksProps = {
  works: WorkProps[];
}

export default function Works({ works } : WorksProps) {
  return (
    <div>
      <ul>
        {works.map((work) => (
          <li key={work.id}>
            <Link href={`/works/${work.id}`}>
              <a>{work.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
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
