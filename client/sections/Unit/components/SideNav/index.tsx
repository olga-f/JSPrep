import { useQuery } from "@apollo/client/react/hooks";
import { Navigation } from "baseui/side-navigation";
import { useRouter } from "next/router";
import { useState } from "react";
import { UNIT_NAV } from "../../../../lib/graphql/queries";
import { UnitNav } from "../../../../lib/types";
import { SideNavSkeleton } from "../SideNavSkeleton";
export const SideNav = (): JSX.Element => {
  const { loading, data, error } = useQuery<UnitNav>(UNIT_NAV);
  const router = useRouter();
  const InitialActiveItemId = router.query.unit?.toString() ?? "";
  const [location, setLocation] = useState(InitialActiveItemId);

  const renderSideNav = () => {
    if (loading) {
      return <SideNavSkeleton />;
    }

    if (data) {
      return (
        <Navigation
          items={data.unitList}
          activeItemId={location}
          onChange={({ event, item }) => {
            event.preventDefault();
            router.push(item.itemId);
            setLocation(item.itemId);
          }}
        />
      );
    }
    if (error) {
      return null;
    }
    return null;
  };

  return <>{renderSideNav()}</>;
};
