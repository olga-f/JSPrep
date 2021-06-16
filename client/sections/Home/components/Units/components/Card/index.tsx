import { useStyletron } from "baseui";
import type { CardProps } from "../types";

export const Card = ({ children }: CardProps): JSX.Element => {
  const [css, theme] = useStyletron();
  return (
    <div
      className={css({
        ...theme.borders.border600,
        marginBottom: theme.sizing.scale1000,
        height: "290px",
        position: "relative",
        width: "100%",
        overflow: "hidden",
      })}
    >
      {children}
    </div>
  );
};
