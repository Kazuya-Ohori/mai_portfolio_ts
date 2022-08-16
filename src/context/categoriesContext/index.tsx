import React, { useContext } from "react";
// import { GetStaticProps } from "next";
// import { client } from '../../libs/client';


type CategoryProps = {
  "id": string;
  "createdAt": string;
  "updatedAt": string;
  "publishedAt": string;
  "revisedAt": string;
  "name": string;
}

type CategoriesContextProviderProps = {
  categories: CategoryProps;
}

const CategoriesContext = React.createContext({
  categories: {}
});

export const useCategoriesContext = () => useContext(CategoriesContext);

export const CategoriesProvider = ({
  categories,
  children,
}: React.PropsWithChildren<CategoriesContextProviderProps>) => {
  return (
    <CategoriesContext.Provider value={{categories: categories}}>
      {children}
    </CategoriesContext.Provider>
  )
};


// // データをテンプレートに受け渡す部分の処理を記述します
// export const getStaticProps:GetStaticProps = async () => {
//   // category[equals]cosplay
//   // queries: { filters: 'category[equals]cosplay' }
//   const data = await client.get({ endpoint: "categories"});

//   return {
//     props: {
//       categories: data.contents,
//     },
//   };
// };
