import { ExerciseProps } from "../../../../lib/interfaces";
import Link from "next/link";
import { Grid, Cell } from "baseui/layout-grid";
import React from "react";
import { SideNav } from "../SideNav";
import { H1, Paragraph3 } from "baseui/typography";
import { ListItem, ListItemLabel } from "baseui/list";
import { Button } from "baseui/button";
import { CodeIcon } from "../../assets/code-icon";
import { useStyletron } from "baseui";
import { Check, Grab, CheckIndeterminate } from "baseui/icon";
import { mq } from "../../../../util/media";

export const Exercises = ({ unit, list }: ExerciseProps): JSX.Element => {
  const [css, theme] = useStyletron();
  const isComplete = false;
  return (
    <Grid>
      <Cell span={[0, 2, 3]}>
        <SideNav />
      </Cell>
      <Cell span={[4, 6, 9]}>
        <Grid>
          <Cell span={[4, 5, 6]}>
            <H1>Plain but Tricky JavaScript</H1>
          </Cell>
          <Cell span={[4, 3, 6]}>
            <Paragraph3>
              In this unit we explore higher order functions and callbacks.
              Functions like map, reduce and filter are powerful tools and keep
              our code DRY but can be complex to navigate. We will learn how to
              build these functions from scratch so you can easily implement and
              debug them in your code.
            </Paragraph3>
          </Cell>
        </Grid>
        <ul
          className={css({
            paddingLeft: 0,
            paddingRight: 0,
            [mq(1200)]: {
              width: "86%",
              paddingLeft: "7%",
            },
          })}
        >
          {list?.map((exercise) => (
            <ListItem
              artwork={isComplete ? Check: CheckIndeterminate}
              key={exercise?.position}
              overrides={{
                Root: {
                  style: {
                    ...theme.borders.border600,
                    marginBottom: theme.sizing.scale800,
                  },
                },
              }}
              endEnhancer={() => (
                <Link
                  href={{
                    pathname: "/[unit]/[exercise]",
                    query: { unit: unit, exercise: exercise?.slug },
                  }}
                >
                  <a>
                    <Button
                      size="compact"
                      endEnhancer={() => {
                        const icon =
                          exercise?.category === "C" ? (
                            <CodeIcon
                              size={20}
                              color={theme.colors.contentInversePrimary}
                            />
                          ) : (
                            <Grab
                              size={20}
                              color={theme.colors.contentInversePrimary}
                            />
                          );
                        return icon;
                      }}
                    >
                      {exercise?.category === "C" ? "Solve" : "Read"}
                    </Button>
                  </a>
                </Link>
              )}
            >
              <ListItemLabel>{exercise?.name}</ListItemLabel>
            </ListItem>
          ))}
        </ul>
      </Cell>
    </Grid>
  );
};