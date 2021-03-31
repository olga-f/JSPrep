
import graphene
from graphene_mongo import MongoengineObjectType
from .models import Exercise, Unit


class UnitType(MongoengineObjectType):
    class Meta:
        model = Unit

class ExerciseType(MongoengineObjectType):
    class Meta:
        model = Exercise

class UnitInput(graphene.InputObjectType):
    id = graphene.ID()
    title = graphene.String()
    about = graphene.List(graphene.String)
    description = graphene.String()
    image_url = graphene.String()
    position = graphene.Int()

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