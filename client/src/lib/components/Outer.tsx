import { useStyletron } from "baseui";

export const Outer: React.FunctionComponent<{}> = ({ children }) => {
  const [css, theme] = useStyletron();
  return (
    <div
      className={css({
        background: theme.colors.accent100,
        padding: "5px 20px",
        backgroundColor: theme.colors.backgroundTertiary,
        boxShadow: theme.lighting.shadow400,
      })}
    >
      {children}
    </div>
  );
};
