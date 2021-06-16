import { useStyletron } from 'baseui';
import type { CardProps } from "../types";

export const CardFeatures = ({ children }: CardProps): JSX.Element => {
  const [css] = useStyletron();
  return (
    <div
      className={css({
        overflow: "hidden",
        textAlign: "right",
        marginRight: "10%",
      })}
    >
      {children}
    </div>
  );
};
