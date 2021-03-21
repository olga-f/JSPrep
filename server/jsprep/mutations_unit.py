import graphene
from django.core.exceptions import ObjectDoesNotExist
from .models import Unit, Exercise
from .types import UnitType, ExerciseType


class UnitInput(graphene.InputObjectType):
    id = graphene.ID()
    title = graphene.String()
    about = graphene.List(graphene.String)
    description = graphene.String()
    image_url = graphene.String()
    position = graphene.Int()


class CreateUnitMutation(graphene.Mutation):
    unit = graphene.Field(UnitType)

    class Arguments:
        unit_data = UnitInput(required=True)

    def mutate(self, info, unit_data=None):
        units = Unit.objects.all()
        num_units = units.count()
        if (units is not None):
            last_unit = units.order_by('-position').first()
            if (last_unit is not None):
                last_position = last_unit.position
                if (last_position is not None and last_position != num_units):
                    for idx, val in enumerate(Unit.objects):
                        val.position=idx + 1
                        val.save()

        unit = Unit(
            title=unit_data.title,
            about=unit_data.about,
            description=unit_data.description,
            image_url=unit_data.image_url,
            position=num_units + 1
        )
        unit.save()

        return CreateUnitMutation(unit=unit)


class UpdateUnitMutation(graphene.Mutation):
    unit = graphene.Field(UnitType)

    class Arguments:
        unit_data = UnitInput(required=True)

    @staticmethod
    def get_object(id):
        return Unit.objects.get(pk=id)

    def mutate(self, info, unit_data=None):
        unit = UpdateUnitMutation.get_object(unit_data.id)
        if unit_data.title:
            unit.title = unit_data.title
        if unit_data.about:
            unit.about = unit_data.about
        if unit_data.description:
            unit.description = unit_data.description
        if unit_data.image_url:
            unit.image_url = unit_data.image_url
        if unit_data.position:
            unit.position = unit_data.position

        unit.save()

        return UpdateUnitMutation(unit=unit)


class DeleteUnitMutation(graphene.Mutation):
    class Arguments:
        id = graphene.ID(required=True)

    success = graphene.Boolean()

    def mutate(self, info, id):
        try:
            Unit.objects.get(pk=id).delete()
            success = True
        except ObjectDoesNotExist:
            success = False

        return DeleteUnitMutation(success=success)