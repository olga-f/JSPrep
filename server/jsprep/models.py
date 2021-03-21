from mongoengine import Document
from datetime import datetime
from mongoengine.fields import (
    StringField,
    ListField,
    URLField,
    ObjectIdField,
    ReferenceField,
    IntField,
    DateTimeField
)
from enum import Enum


class Unit(Document):
    meta = {"collection": "unit", "ordering": "position"}
    ID = ObjectIdField()
    title = StringField()
    about = ListField(StringField())
    description = StringField()
    image_url = URLField()
    date_created = DateTimeField(default=datetime.utcnow)
    position = IntField(default=0)

class ExerciseCategory(Enum):
    T = "Tutorial"
    C = "Challenge"
    V = "Video"

    @classmethod
    def choices(cls):
        return [(tag, tag.value) for tag in cls] 

class Exercise(Document):
    meta = {"collection": "exercise", "ordering": "position"}
    ID = ObjectIdField()
    unit = ReferenceField("Unit")
    name = StringField()
    description = StringField()
    content = StringField()
  #  category = StringField()
    code = StringField()
    test = StringField()
    position = IntField(default=0)
    date_created = DateTimeField(default=datetime.utcnow) 