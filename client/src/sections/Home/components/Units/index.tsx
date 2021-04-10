import { UnitProps } from "../../../../lib/interfaces";
import Link from "next/link";
import { Card, StyledBody, StyledAction, StyledThumbnail } from "baseui/card";
import { Button, SIZE } from "baseui/button";
import { ChevronRight } from "baseui/icon/";
import {Grid, Cell} from 'baseui/layout-grid';
import { useStyletron } from "baseui";
export const Units = ({ list }: UnitProps): JSX.Element => {
  const [css, theme] = useStyletron();
  return (
    <Grid>
      {list?.map((unit) => (
         <Cell span={[4, 4, 3]} key={unit?.position}>
        <Link
          href={{
            pathname: "/[unit]",
            query: { unit: unit?.slug },
          }}
        >
          <Card
            overrides={{ Root: { style: { width: "100%" } } }}
            title={unit?.title}
          >
            <StyledThumbnail
              src={"https://source.unsplash.com/user/erondu/300x300"}
            />
            <StyledBody>
              <text className={css({
        height: theme.sizing.scale3200

      })}> {unit?.about}</text>
             
            </StyledBody>
            <StyledAction>
              <Button size={SIZE.compact} overrides={{ BaseButton: { style: { width: "100%" } } }} endEnhancer={() => <ChevronRight size={24} />}>
                Begin Unit
              </Button>
            </StyledAction>
          </Card>
        </Link>
         </Cell>
      ))}
    </Grid>
  );
};
