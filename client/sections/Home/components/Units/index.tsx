import Link from "next/link";
import { Button, SIZE } from "baseui/button";
import { ChevronRight } from "baseui/icon";
import { Grid, Cell } from "baseui/layout-grid";
import { Label4 } from "baseui/typography";
import {
  Card,
  CardBackground,
  CardBody,
  CardTitle,
  CardFeatures,
} from "./components/";
import { ListProps } from "../../../../lib/types";


export const Units = ({ list }:ListProps): JSX.Element => {
  const defaultImgUrl = "/default.svg";
  return (
    <Grid>
      {list?.map((unit) => (
        <Cell span={[4, 4, 3]} key={unit?.position}>
          <Card>
            <CardBackground image={unit?.imageUrl ?? defaultImgUrl} />
            <CardBody>
              <CardTitle title={unit?.title ?? ""} />
              <CardFeatures>
                {unit?.about?.map((feature, index) => (
                  <Label4 key={index}>{feature}</Label4>
                ))}
              </CardFeatures>
            </CardBody>
            <Link
              href={{
                pathname: "/[unit]",
                query: { unit: unit?.slug },
              }}
            >
              <a>
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
              </a>
            </Link>
          </Card>
        </Cell>
      ))}
    </Grid>
  );
};
