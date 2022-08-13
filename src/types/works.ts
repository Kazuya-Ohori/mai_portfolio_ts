
export type WorkImageProp = {
  url: string;
  height: number;
  width: number;
}

export type WorkImagesProps = {
  fieldId: string;
  image: {
    url: string;
    height: number;
    width: number;
  };
}

export type WorkCategoryProps = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  name: string;
}

export type WorkProps = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  images: WorkImagesProps[];
  category: WorkCategoryProps;
  created_date: string;
  url: string;
  label: string;
  description: string;
}
