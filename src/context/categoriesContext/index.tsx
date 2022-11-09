import { GetStaticProps } from "next";
import { useEffect, useState, createContext } from "react";
import { client } from "../../libs/client";

type CategoryProps = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  name: string;
};

type CategoriesContextProviderProps = {
  categories: CategoryProps;
};

const CategoriesContext = createContext({});

export const CategoriesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [categories, setCategories] = useState();
  useEffect(() => {
    async () => {
      const data = await client.get({ endpoint: "categories" });
      setCategories(data.contents);
    };
  }, []);
  return (
    <CategoriesContext.Provider value={{ categories, setCategories }}>
      {children}
    </CategoriesContext.Provider>
  );
};

// // データをテンプレートに受け渡す部分の処理を記述します
// export const getStaticProps: GetStaticProps = async () => {
//   // category[equals]cosplay
//   // queries: { filters: 'category[equals]cosplay' }
//   const data = await client.get({ endpoint: "categories" });

//   return {
//     props: {
//       categories: data.contents,
//     },
//   };
// };
