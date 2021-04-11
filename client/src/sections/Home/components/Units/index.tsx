import { UnitProps } from "../../../../lib/interfaces";
import Link from "next/link";
import { Card, StyledBody, StyledAction, StyledThumbnail } from "baseui/card";
import { Button, SIZE } from "baseui/button";
import { ChevronRight } from "baseui/icon/";
import { Grid, Cell } from "baseui/layout-grid";
import { useStyletron } from "baseui";
import {
  Paragraph4,
} from "baseui/typography";
export const Units = ({ list }: UnitProps): JSX.Element => {
  const [css, theme] = useStyletron();
  return (
    <Grid>
      {list?.map((unit) => (
        <Cell span={[4, 4, 3]} key={unit?.position}>
          <Card
            overrides={{
              Root: {
                style: {
                  marginBottom: "15px",
                  height: "350px",
                  position: "relative",
                  width: "100%",
                  overflow: "hidden"
                },
              },
            }}
            title={unit?.title}
          >
            <StyledThumbnail src={unit?.imageUrl} />
     
              <Paragraph4>
                <ul
                  // className={css({
                  //   height: "100px",
                  //   textOverflow: "ellipsis",
                  //   // overflow: "hidden",
                  // })}
                >
                  {unit?.about?.map((feature) => (
                    <li>{feature}</li>
                  ))}
                </ul>
              </Paragraph4>{" "}

  
              <Link
                href={{
                  pathname: "/[unit]",
                  query: { unit: unit?.slug },
                }}
              >
                <Button
                  size={SIZE.compact}
                  overrides={{
                    BaseButton: {
                      style: {
                        width: "80%",
                        position: "absolute",
                        bottom: "15px",
                        left: "10%",
                      },
                    },
                  }}
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
