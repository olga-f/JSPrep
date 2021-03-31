import { useRouter } from "next/router";
import { ExerciseProps } from "../../../../lib/interfaces";

export const Exercises = ({ unit, list }: ExerciseProps): JSX.Element => {
  const router = useRouter();
  return (
    <ul>
      {list?.map((exercise) => (
        <li key={exercise?.position}>
          <span
            onClick={() => {
              router.push({
                pathname: "/[unit]/[exercise]",
                query: { unit: unit, exercise: exercise?.slug },
              });
            }}
          >
            {exercise?.name} {exercise?.category}
          </span>
        </li>
      ))}
    </ul>
  );
};
