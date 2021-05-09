import { useStyletron } from "baseui";
export const Footer: React.FunctionComponent = () => {
  const [css, theme] = useStyletron();
  return (
    <div
      className={css({
        height: theme.sizing.scale100,
      })}
    ></div>
  );
};
