import type { ReactNode } from "react";
import type { unitList_unitList as Unit } from "../../../../../../lib/graphql/queries/HomePage/__generated__/unitList";

export type CardProps = {
  children?: ReactNode;
};

export type ImgBackground = {
  image: Unit["imageUrl"];
};

export type TitleProps = {
  title: string;
};
