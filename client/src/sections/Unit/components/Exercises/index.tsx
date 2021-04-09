import { ExerciseProps } from "../../../../lib/interfaces";
import Link from "next/link";

export const Exercises = ({ unit, list }: ExerciseProps): JSX.Element => {
  return (
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
  );
};
