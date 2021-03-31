import graphene
from .models import Unit, Exercise
from .types import UnitType, ExerciseType
from .mutations_unit import CreateUnitMutation, UpdateUnitMutation, DeleteUnitMutation
from .mutations_exercise import CreateExerciseMutation, UpdateExerciseMutation, DeleteExerciseMutation


class Mutations(graphene.ObjectType):
    create_unit = CreateUnitMutation.Field()
    update_unit = UpdateUnitMutation.Field()
    delete_unit = DeleteUnitMutation.Field()

    create_exercise = CreateExerciseMutation.Field()
    update_exercise = UpdateExerciseMutation.Field()
    delete_exercise = DeleteExerciseMutation.Field()


class Query(graphene.ObjectType):
    unit_list = graphene.List(UnitType)
    exercise = graphene.Field(ExerciseType, id=graphene.ID(required=True))
    exercise_list = graphene.List(ExerciseType)
    exercise_list_by_unit_slug = graphene.List(ExerciseType, slug=graphene.String(required=True))
    exercise_by_slug = graphene.Field(ExerciseType, slug=graphene.String(required=True))
    exercise_list_with_unit_slug= graphene.List(ExerciseType)

    def resolve_unit_list(self, info):
        return Unit.objects.order_by('position')

    def resolve_exercise(self, info, id = None, **kwargs):
        if id:
            return Exercise.objects.get(pk=id)

    def resolve_exercise_list(self, info):         
            return Exercise.objects.all()
   
    def resolve_exercise_list_by_unit_slug(self, info, slug = None, **kwargs):
        if slug:
            unit = Unit.objects.filter(slug=slug).first()
            return Exercise.objects.filter(unit=unit).order_by('position')

    def resolve_exercise_by_slug(self, info, slug = None, **kwargs):
        if slug:
            return Exercise.objects.filter(slug=slug).first()


schema = graphene.Schema(query=Query, mutation=Mutations, types=[UnitType, ExerciseType])