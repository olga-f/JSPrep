import { Navigation } from "baseui/side-navigation";
import { useRouter } from "next/router";
import { useState } from "react";
export const SideNav = (): JSX.Element => {
  const router = useRouter();
  const [location, setLocation] = useState(router.asPath);

  return (
    <Navigation
      items={[
        {
          title: "Home",
          itemId: "/",
        },
        {
          title: "Graph searches",
          itemId: "/graph-searches",
        },
        {
          title: "Plain but tricky Javascript",
          itemId: "/plain-but-tricky-javascript",
        },
      ]}
      activeItemId={location}
      onChange={({ event, item }) => {
        event.preventDefault();
        router.push(item.itemId);
        setLocation(item.itemId);
      }}
    />
  );
};
