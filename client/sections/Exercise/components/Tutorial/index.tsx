import { TutorialProps } from "../../../../lib/types";

export const Tutorial = ({ data }: TutorialProps): JSX.Element => {
  return <div>{data?.name}</div>;
};
