import Link from "next/link";
import Image from "next/image";

import { GithubLogo } from "./github-logo";

import { Button, KIND, SIZE, SHAPE } from "baseui/button";
import { useStyletron } from "baseui";

const mq = (breakpoint: number): string =>
  `@media screen and (min-width: ${breakpoint}px)`;

export default function Header() {
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
          marginLeft: "none",
          marginRight: "auto",
          display: "flex",
          alignItems: "center",
          order: 1,
        })}
      >
        <Link href="/">
          <a
            className={css({
              display: "flex",
              marginLeft: "none",
              marginRight: theme.sizing.scale400,
              ":focus": {
                outline: `3px solid ${theme.colors.accent}`,
                outlineOffset: "5px",
              },
            })}
          >
            <Image src="/jsprep.svg" alt="JS Prep" width="64" height="40" />
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
                [mq(400)]: {
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
}
