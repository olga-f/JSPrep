from graphene import relay
from graphene_mongo import MongoengineObjectType
from .models import Exercise, Unit


class UnitType(MongoengineObjectType):
    class Meta:
        model = Unit

class ExerciseType(MongoengineObjectType):
    class Meta:
        model = Exercise