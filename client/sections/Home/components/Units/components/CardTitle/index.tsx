import { useStyletron } from "baseui";
import type { TitleProps } from "../types";

export const CardTitle = ({ title }: TitleProps): JSX.Element => {
  const width = "65%";
  const [css, theme] = useStyletron();
  return (
    <h2
      className={css({
        fontSize: theme.sizing.scale850,
        textAlign: "center",
        overflow: "hidden",
        position: "relative",
      })}
    >
      <span
        className={css({
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          left: 0,
          right: 0,
          textAlign: "center",
          overflow: "hidden",
          clipPath: `polygon(0 0, ${width} 0, ${width} 100%, 0% 100%)`,
          backgroundColor: theme.colors.backgroundPrimary,
          color: theme.colors.accent,
        })}
      >
        {title}
      </span>
      {title}
    </h2>
  );
};
