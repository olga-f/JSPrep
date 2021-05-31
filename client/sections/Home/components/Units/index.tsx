import { Button, SIZE } from "baseui/button";
import { ChevronRight } from "baseui/icon";
import { Cell, Grid } from "baseui/layout-grid";
import { Label4 } from "baseui/typography";
import { useRouter } from "next/router";

import { UnitListProps } from "../../../../lib/types";
import {
  Card,
  CardBackground,
  CardBody,
  CardFeatures,
  CardTitle,
} from "./components/";

export const Units = ({ list }: UnitListProps): JSX.Element => {
  const defaultImgUrl = "/default.svg";
  const router = useRouter();
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

            <Button
              onClick={() =>
                router.push({
                  pathname: "/[unit]",
                  query: { unit: unit?.slug },
                })
              }
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
          </Card>
        </Cell>
      ))}
    </Grid>
  );
};
