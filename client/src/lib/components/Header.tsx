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
        paddingTop: theme.sizing.scale300,
        paddingBottom: theme.sizing.scale400,
        paddingLeft: theme.sizing.scale1000,
        paddingRight: theme.sizing.scale1000,
        boxShadow: theme.lighting.shadow700,
        marginBottom: theme.sizing.scale1000,
      })}
    >
      <div
        className={css({
          //  marginLeft: "none",
          marginRight: "auto",
          // display: "flex",
          // alignItems: "center",
          // order: 1,
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
                //  position: "absolute",
                //  top: "50%",
                //  left: "50%",
                //   transform: "translate(-50%, -50%)",
                padding:  theme.sizing.scale100,
                color: theme.colors.contentPrimary,
                border: "3px solid black",
                // width: 237,
                //  height: 217,
                // padding: 15,
              })}
            >
              <h1
                className={css({
                  fontSize: theme.sizing.scale700,
                  // fontWeight: 100,
                  margin: "0",
                  textAlign: "right",
                  textTransform: "uppercase",
                  lineHeight: 0.9,
                  letterSpacing: theme.sizing.scale100,

                  //  transition: "all 250ms linear",
                  //  fontVariationSettings: "wght 50, wdth 500",
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
