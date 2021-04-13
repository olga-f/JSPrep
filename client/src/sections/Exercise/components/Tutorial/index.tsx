import { TutorialProps } from "../../../../lib/interfaces";

export const Tutorial = ({ data }: TutorialProps): JSX.Element => {
  return <div>{data?.name}</div>;
};
