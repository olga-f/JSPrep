import { ExerciseProps } from "../../../../lib/interfaces";
import Link from "next/link";
import { Grid, Cell } from "baseui/layout-grid";
import React from "react";
import { SideNav } from "../SideNav";

export const Exercises = ({ unit, list }: ExerciseProps): JSX.Element => {
  return (
    <Grid>
      <Cell span={[0, 2, 3]}>
        <SideNav />
      </Cell>
      <Cell span={[4, 6, 9]}>
        <ul>
          {list?.map((exercise) => (
            <li key={exercise?.position}>
              <Link
                href={{
                  pathname: "/[unit]/[exercise]",
                  query: { unit: unit, exercise: exercise?.slug },
                }}
              >
                <a>
                  {exercise?.name} {exercise?.category}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </Cell>
    </Grid>
  );
};
