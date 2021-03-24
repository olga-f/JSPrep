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


class Unit(Document):
    ID = ObjectIdField()
    title = StringField()
    about = ListField(StringField())
    description = StringField()
    image_url = URLField()
    date_created = DateTimeField(default=datetime.utcnow)
    position = IntField(default=0)


class Exercise(Document):
    ID = ObjectIdField()
    unit = ReferenceField("Unit")
    name = StringField()
    description = StringField()
    content = StringField()
    category = StringField(max_length=1,default='T')
    code = StringField()
    test = StringField()
    position = IntField(default=0)
    date_created = DateTimeField(default=datetime.utcnow) 