import { useQuery } from "@apollo/client/react/hooks";
import { UNIT_LIST } from "../../../../lib/graphql/queries";
import { unitList as UnitsData } from "../../../../lib/graphql/queries/Unit/__generated__/unitList";
import { Units } from "../Units";

export const HomeUnitList = (): JSX.Element => {
  const { loading, data } = useQuery<UnitsData>(UNIT_LIST);

  const renderHomeUnitList = () => {
    if (loading) {
      //  return <HomeUnitListSkeleton />;
    }

    if (data) {
      return <Units list={data.unitList} />;
    }

    return null;
  };

  return <section>{renderHomeUnitList()}</section>;
};
