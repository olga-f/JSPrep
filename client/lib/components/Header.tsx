import Link from "next/link";
import { GithubLogo } from "./github-logo";
import { Button, KIND, SHAPE } from "baseui/button";
import { useStyletron } from "baseui";
import { mq } from "../../util/media";

export const Header = (): JSX.Element => {
  const [css, theme] = useStyletron();
  return (
    <header
      className={css({
        ...theme.typography.ParagraphMedium,
        display: "flex",
        flexWrap: "wrap",
        paddingTop: theme.sizing.scale200,
        paddingBottom: theme.sizing.scale200,
        paddingLeft: theme.sizing.scale1000,
        paddingRight: theme.sizing.scale1000,
        boxShadow: theme.lighting.shadow700,
        marginBottom: theme.sizing.scale900,
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
                  fontSize: theme.sizing.scale700,
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
          // @ts-expect-error: rel="noopener" prevents the new page from being able to access the window
          rel="noopener"
          aria-label="JSPrep on GitHub"
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
