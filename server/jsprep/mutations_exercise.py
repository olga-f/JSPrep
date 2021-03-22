import graphene
from django.core.exceptions import ObjectDoesNotExist
from .models import Exercise
from .types import ExerciseType
from enum import Enum

class ExerciseCategory(Enum):
    TUTORIAL = "T"
    CHALLENGE = "C"
    VIDEO = "V"

class ExerciseInput(graphene.InputObjectType):
    id = graphene.ID()
    unit = graphene.ID()
    name = graphene.String()
    description = graphene.String()
    content=graphene.String()
    category = graphene.String()
    code = graphene.String()
    test = graphene.String()
    position = graphene.Int()


class CreateExerciseMutation(graphene.Mutation):
    exercise = graphene.Field(ExerciseType)

    class Arguments:
        exercise_data = ExerciseInput(required=True)
        category_enum = graphene.Argument(graphene.Enum.from_enum(ExerciseCategory))

    def mutate(self, info, exercise_data=None, category_enum=None):
        exercises = Exercise.objects.all()
        num_exercises = exercises.count()
        if (exercises is not None):
            last_exercise = exercises.order_by('-position').first()
            if (last_exercise is not None):
                last_position = last_exercise.position
                if (last_position is not None and last_position != num_exercises):
                    for idx, val in enumerate(Exercise.objects):
                        val.position=idx + 1
                        val.save()

        exercise = Exercise(
            unit=exercise_data.unit,
            name=exercise_data.name,
            description=exercise_data.description,
            content=exercise_data.content,
            code=exercise_data.code,
            test=exercise_data.test,
            category=category_enum,
            position=num_exercises + 1
        )
        exercise.save()

        return CreateExerciseMutation(exercise=exercise)