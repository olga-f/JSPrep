import { UnitProps } from "../../../../lib/interfaces";
import Link from 'next/link'
export const Units = ({ list }: UnitProps): JSX.Element => {
  return (
    <ul>
      {list?.map((unit) => (
        <li key={unit?.position}>
          
          <Link
            href={{
              pathname: "/[unit]",
              query: { unit: unit?.slug },
            }}
          >
            <a>{unit?.title}</a>
          </Link>
          <div>{unit?.about}</div>
        </li>
      ))}
    </ul>
  );
};
