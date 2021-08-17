import { Button } from "baseui/button";
import { Cell, Grid } from "baseui/layout-grid";
import { Check, CheckIndeterminate, Grab } from "baseui/icon";
import { CodeIcon } from "../../assets/code-icon";
import { H1, Paragraph3 } from "baseui/typography";
import { ListItem, ListItemLabel } from "baseui/list";
import { mq } from "../../../../util/media";
import { useRouter } from "next/router";
import { useStyletron } from "baseui";
import type { ExerciseListProps } from "../../../../lib/types";

export const Exercises = ({ list }: ExerciseListProps): JSX.Element => {
  const [css, theme] = useStyletron();
  const isComplete = false;
  const router = useRouter();
  return (
    <>
      <Grid>
        <Cell span={[4, 5, 6]}>
          <H1 marginTop={0}>
            {list?.find((x) => x !== undefined)?.unit?.title}
          </H1>
        </Cell>
        <Cell span={[4, 3, 6]}>
          <Paragraph3>
            {list?.find((x) => x !== undefined)?.unit?.description}
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
            artwork={isComplete ? Check : CheckIndeterminate}
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
              <Button
                overrides={{
                  BaseButton: {
                    style: {
                      marginLeft: theme.sizing.scale100,
                    },
                  },
                }}
                onClick={() =>
                  router.push({
                    pathname: "/[unit]/[exercise]",
                    query: {
                      unit: list?.find((x) => x !== undefined)?.unit?.slug,
                      exercise: exercise?.slug,
                    },
                  })
                }
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
            )}
          >
            <ListItemLabel>{exercise?.name}</ListItemLabel>
          </ListItem>
        ))}
      </ul>
    </>
  );
};
