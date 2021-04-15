import { useStyletron } from "baseui";
import { CardProps } from "../types";

export const CardBody = ({ children }: CardProps): JSX.Element => {
  const [css] = useStyletron();
  return (
    <div
      className={css({
        position: "absolute",
        width: "100%",
      })}
    >
      {children}
    </div>
  );
};
