import Link from "next/link";
import { GithubLogo } from "./github-logo";
import { Button, KIND, SIZE, SHAPE } from "baseui/button";
import { useStyletron } from "baseui";

const mq = (breakpoint: number): string =>
  `@media screen and (min-width: ${breakpoint}px)`;

export const Header = (): JSX.Element => {
  const [css, theme] = useStyletron();
  return (
    <header
      className={css({
        ...theme.typography.ParagraphMedium,
        display: "flex",
        flexWrap: "wrap",
        paddingTop: theme.sizing.scale400,
        paddingBottom: theme.sizing.scale400,
        paddingLeft: theme.sizing.scale1000,
        paddingRight: theme.sizing.scale1000,
        boxShadow: theme.lighting.shadow700,
        marginBottom: theme.sizing.scale1000,
      })}
    >
      <div
        className={css({
          marginRight: "auto",
        })}
      >
        <Link href="/">
          <a
            className={css({
              textDecoration: "none",
            })}
          >
            <div
              className={css({
                padding: theme.sizing.scale100,
                color: theme.colors.contentPrimary,
              })}
            >
              <h1
                className={css({
                  fontSize: theme.sizing.scale750,
                  margin: "0",
                  textAlign: "right",
                  textTransform: "uppercase",
                  lineHeight: 0.9,
                  letterSpacing: theme.sizing.scale200,
                })}
              >
                JS
                <br />
                Prep
              </h1>
            </div>
          </a>
        </Link>
      </div>

      <div
        className={css({
          display: "flex",
          alignItems: "center",
          order: 2,
        })}
      >
        <Button
          $as="a"
          href="https://github.com/olga-f/jsprep.org"
          target="_blank"
          size={SIZE.compact}
          kind={KIND.tertiary}
          shape={SHAPE.square}
          overrides={{
            BaseButton: {
              style: {
                display: "none",
                [mq(320)]: {
                  display: "flex",
                },
              },
            },
          }}
        >
          <GithubLogo size={32} color={theme.colors.contentPrimary} />
        </Button>
      </div>
    </header>
  );
};
