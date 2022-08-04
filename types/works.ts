export type WorkImageProps = {
  url: string;
  height: number;
  width: number;
}

export type WorkImagesProps = {
  fieldId: string;
  image: WorkImageProps[];
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
  category: WorkCategoryProps[];
  created_date: string;
  url: string;
  label: string;
  description: string;
}
