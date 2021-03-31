import { UnitProps } from "../../../../lib/interfaces";
import { NextRouter, useRouter } from "next/router";

export const Units = ({ list }: UnitProps): JSX.Element => {
  const router: NextRouter = useRouter();
  return (
    <ul>
      {list?.map((unit) => (
        <li key={unit?.position}>
          <span
            onClick={() => {
              router.push({
                pathname: "/[unit]",
                query: { unit: unit?.slug },
              });
            }}
          >
            {unit?.title}
          </span>
          <div>{unit?.about}</div>
        </li>
      ))}
    </ul>
  );
};
