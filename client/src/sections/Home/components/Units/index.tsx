import { UnitProps } from "../../../../lib/interfaces";
import Link from "next/link";
import { Card, StyledBody, StyledAction, StyledThumbnail } from "baseui/card";
import { Button, SIZE } from "baseui/button";
import { ChevronRight } from "baseui/icon/";
import { Grid, Cell } from "baseui/layout-grid";
import { useStyletron } from "baseui";
import {
  Label1,
  Label2,
  Label3,
  Label4,
  Paragraph1,
  Paragraph2,
  Paragraph3,
  Paragraph4,
} from "baseui/typography";
export const Units = ({ list }: UnitProps): JSX.Element => {
  const [css, theme] = useStyletron();
  return (
    <Grid >
      {list?.map((unit) => (
        <Cell span={[4, 4, 3]} key={unit?.position}>
          <Card
            overrides={{
              Root: {
                style: { marginBottom: "15px", height: "350px"},
              },
            }}
            title={unit?.title}
          >
            <StyledThumbnail
              src={"https://source.unsplash.com/user/erondu/300x300"}
            />

            <ul
              className={css({
               height: "200px",
                 overflowY: "hidden",
              })}
            >
              {unit?.about?.map((feature) => (
                <li>
                  <Paragraph3>{feature}</Paragraph3>
                </li>
              ))}
            </ul>

            <Link
              href={{
                pathname: "/[unit]",
                query: { unit: unit?.slug },
              }}
            >

                <Button
                  size={SIZE.compact}
                  overrides={{ BaseButton: { style: { width: "100%"} } }}
                  endEnhancer={() => <ChevronRight size={24} />}
                >
                  Begin Unit
                </Button>

            </Link>
          </Card>
        </Cell>
      ))}
    </Grid>
  );
};
