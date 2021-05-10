import { Units } from "../Units";
import { UnitsProps } from "../../../../lib/types";

export const HomeUnitList = ({ units }: UnitsProps): JSX.Element => {
  const { data } = units;

  const renderHomeUnitList = () => {
    if (data.unitList?.length) {
      return <Units list={data.unitList} />;
    }
    return null;
  };

  return <main>{renderHomeUnitList()}</main>;
};
