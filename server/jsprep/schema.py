import graphene
from graphene.relay import Node
from graphene_mongo.fields import MongoengineConnectionField
from .models import Shop, Bike
from .types import BikeType, ShopType
from .mutations import CreateBikeMutation, UpdateBikeMutation, DeleteBikeMutation


class Mutations(graphene.ObjectType):
    create_bike = CreateBikeMutation.Field()
    update_bike = UpdateBikeMutation.Field()
    delete_bike = DeleteBikeMutation.Field()


class Query(graphene.ObjectType):
    node = Node.Field()
    bikes = MongoengineConnectionField(BikeType)
    shop_list = graphene.List(ShopType)
    bikes_list = graphene.List(BikeType)

    def resolve_shop_list(self, info):
        return Shop.objects.all()
    def resolve_bikes_list(self, info):
        return Bike.objects.all()


schema = graphene.Schema(query=Query, mutation=Mutations, types=[BikeType, ShopType])