from .util import order_objects_by_position
import graphene
from django.core.exceptions import ObjectDoesNotExist
from .models import Unit
from .types import UnitInput, UnitType
from django.utils.text import slugify


class CreateUnitMutation(graphene.Mutation):
    unit = graphene.Field(UnitType)

    class Arguments:
        unit_data = UnitInput(required=True)

    def mutate(self, info, unit_data=None):
        num_units = len(Unit.objects)
        sort=False
        if (unit_data.position is not None):
            position = unit_data.position
            sort=True
        else:
            position =num_units + 1

        unit = Unit(
            title=unit_data.title,
            about=unit_data.about,
            description=unit_data.description,
            image_url=unit_data.image_url,
            position=position,
            slug=slugify(unit_data.title)
        )
        unit.save()
        if (sort is True):
            units = Unit.objects.all()
            order_objects_by_position(units)

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
            unit.slug = slugify(unit_data.title)
        if unit_data.about:
            unit.about = unit_data.about
        if unit_data.description:
            unit.description = unit_data.description
        if unit_data.image_url:
            unit.image_url = unit_data.image_url
        if unit_data.position:
            unit.position = unit_data.position
            unit.save()
            units= Unit.objects.all()
            order_objects_by_position(units)

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