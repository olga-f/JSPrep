from .settings import *
from mongoengine import disconnect

disconnect()
connect(
    "testdb", host="mongomock://localhost", alias="default"
)