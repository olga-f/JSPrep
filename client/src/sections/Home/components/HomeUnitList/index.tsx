import { useQuery } from "@apollo/client/react/hooks";
import { UNIT_LIST } from "../../../../lib/graphql/queries";
import { unitList as UnitsData } from "../../../../lib/graphql/queries/Unit/__generated__/unitList";
import { Units } from "../Units";

export const HomeUnitList = (): JSX.Element => {
  const { loading, data, error } = useQuery<UnitsData>(UNIT_LIST);

  const renderHomeUnitList = () => {
    if (loading) {
      return "Loading...";
      //  return <HomeUnitListSkeleton />;
    }

    if (data?.unitList?.length) {
      return (
          <Units list={data.unitList} />
      );
    }

    if (error) {
      return "Error!";
    }

    return null;
  };

  return <main>{renderHomeUnitList()}</main>;
};
