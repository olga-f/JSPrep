import { ReactNode } from "react";

import { unitList_unitList as Unit } from "../../../../../../lib/graphql/queries/HomePage/__generated__/unitList";

export type CardProps = {
  children?: ReactNode;
};

export type ImgBackground = {
  image: Unit["imageUrl"];
};

export type TitleProps = {
  title: string;
};
