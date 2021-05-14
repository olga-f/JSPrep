import { Exercise, ExerciseData } from '../../../../lib/types';
import { Challenge } from '../Challenge';
import { Tutorial } from '../Tutorial';

export const ExerciseMain = ({ exercise }: ExerciseData): JSX.Element => {
  const { data } = exercise;

  const renderExerciseMain = () => {
    return setCategory(data);
  };
  return <main>{renderExerciseMain()}</main>;
};

function setCategory(data: Exercise) {
  switch (data.exerciseBySlug.category) {
    case "C":
      return <Challenge exercise={data.exerciseBySlug} />;
    case "T":
      return <Tutorial exercise={data.exerciseBySlug} />;

    default:
      return <Tutorial exercise={data.exerciseBySlug} />;
  }
}
