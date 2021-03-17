from .settings import *  # flake8: noqa
from mongoengine import disconnect

disconnect()
connect(
    "graphene-mongo-test", host="mongomock://localhost", alias="default"
)