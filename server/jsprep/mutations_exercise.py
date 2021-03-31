import graphene
from django.core.exceptions import ObjectDoesNotExist
from .models import Exercise
from .types import ExerciseInput, ExerciseType
from .util import order_objects_by_position
from enum import Enum
from django.utils.text import slugify

class ExerciseCategory(Enum):
    TUTORIAL = "T"
    CHALLENGE = "C"
    VIDEO = "V"

class CreateExerciseMutation(graphene.Mutation):
    exercise = graphene.Field(ExerciseType)

    class Arguments:
        exercise_data = ExerciseInput(required=True)
        category_enum = graphene.Argument(graphene.Enum.from_enum(ExerciseCategory))

    def mutate(self, info, exercise_data=None, category_enum=None):
        num_exercises = len(Exercise.objects)
        sort=False
        if (exercise_data.position is not None):
            position = exercise_data.position
            sort=True
        else:
            position =num_exercises + 1
        
        exercise = Exercise(
            unit=exercise_data.unit,
            name=exercise_data.name,
            description=exercise_data.description,
            content=exercise_data.content,
            code=exercise_data.code,
            test=exercise_data.test,
            category=category_enum,
            position=position,
            slug=slugify(exercise_data.name)
        )
        exercise.save()
        if (sort is True):
            exercises = Exercise.objects.all()
            order_objects_by_position(exercises)
        
        return CreateExerciseMutation(exercise=exercise)


class UpdateExerciseMutation(graphene.Mutation):
    exercise = graphene.Field(ExerciseType)

    class Arguments:
        exercise_data = ExerciseInput(required=True)

    @staticmethod
    def get_object(id):
        return Exercise.objects.get(pk=id)


    def mutate(self, info, exercise_data=None):
        exercise = UpdateExerciseMutation.get_object(exercise_data.id)
        if (exercise_data is not exercise):
            if exercise_data.unit:
                exercise.unit = exercise_data.unit
            if exercise_data.name:
                exercise.name = exercise_data.name
                exercise.slug = slugify(exercise_data.name)
            if exercise_data.description:
                exercise.description = exercise_data.description
            if exercise_data.content:
                exercise.content = exercise_data.content
            if exercise_data.category:
                exercise.category = exercise_data.category
            if exercise_data.code:
                exercise.code = exercise_data.code
            if exercise_data.test:
                exercise.test = exercise_data.test
            if exercise_data.position:
                exercise.position = exercise_data.position
                exercise.save()
                exercises = Exercise.objects.all()
                order_objects_by_position(exercises)

            exercise.save()

        return UpdateExerciseMutation(exercise=exercise)


class DeleteExerciseMutation(graphene.Mutation):
    class Arguments:
        id = graphene.ID(required=True)

    success = graphene.Boolean()

    def mutate(self, info, id):
        try:
            Exercise.objects.get(pk=id).delete()
            success = True
        except ObjectDoesNotExist:
            success = False

        return DeleteExerciseMutation(success=success)