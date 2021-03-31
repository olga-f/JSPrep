from mongoengine import Document
from datetime import datetime
from mongoengine.errors import ValidationError
from mongoengine.fields import (
    StringField,
    ListField,
    URLField,
    ObjectIdField,
    ReferenceField,
    IntField,
    DateTimeField
)


class Unit(Document):
    ID = ObjectIdField()
    title = StringField(unique=True, required=True)
    about = ListField(StringField())
    description = StringField()
    image_url = URLField()
    date_created = DateTimeField(default=datetime.utcnow)
    position = IntField(default=0, required=True)
    slug= StringField(unique=True,required=True)


class Exercise(Document):
    ID = ObjectIdField()
    unit = ReferenceField("Unit", required=True)
    name = StringField(unique=True,required=True)
    description = StringField()
    content = StringField()
    category = StringField(max_length=1, default='T', required=True)
    code = StringField()
    test = StringField()
    position = IntField(default=0, required=True)
    date_created = DateTimeField(default=datetime.utcnow)
    slug= StringField(unique=True,required=True)