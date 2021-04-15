import { useStyletron } from "baseui";
import { ImgBackground } from "../types";

export const CardBackground = ({ image }: ImgBackground): JSX.Element => {
  const width = "65%";
  const [css] = useStyletron();
  return (
    <span
      className={css({
        position: "absolute",
        width: `${width}`,
        height: "100%",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
      })}
    ></span>
  );
};
