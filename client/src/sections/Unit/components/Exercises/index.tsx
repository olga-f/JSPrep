import { ExerciseProps } from "../../../../lib/interfaces";
import { useRouter } from "next/router";

export const Exercises = ({ list }: ExerciseProps): JSX.Element => {
    const router = useRouter()
  return (
    <ul>
      {list?.map((exercise) => (
        <li key={exercise?.position}>
<span
      onClick={() => {
        router.push({
          pathname: '/[unit]/[exercise]',
          query: { unit: exercise?.unit?.id, exercise: exercise?.id},
        })
      }}
    >
 {exercise?.name}  {exercise?.category}
    </span>
        
        </li>
      ))}
    </ul>
  );
};