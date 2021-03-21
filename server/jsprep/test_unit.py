import pytest
from django.urls import reverse
from django.test import RequestFactory
from graphene.test import Client
from .schema import schema
from .fixtures import fixtures_data


def test_unit_data_query(fixtures_data):
    query = """{
               unitList{
                    title
                    about
                    description
                    imageUrl
                    }
            }"""

    expected = {
        "data": {
            "unitList": [
                {
                    "title": "Unit 1",
                    "about": ["A", "B", "C", "D"],
                    "description": "This is a test unit 1",
                    "imageUrl": "https://example.com/unit1.jpg",

                },
                 {
                    "title": "UNIT 2",
                    "about": ["a", "b", "c"],
                    "description": "THIS IS a test unit 2",
                    "imageUrl": "https://example.com/unit2.jpg",
                },
                {
                    "title": "Functional JavaScript",
                    "about": ["Higher order functions","reduce, filter","Function composition", "Closure", "Partial application"],
                    "description": "Functional programming - a paradigm for structuring our complex code",
                    "imageUrl": "https://cdn.pixabay.com/photo/2015/11/24/10/52/gears-1059756_960_720.png"
                },
            ]
        }
    }

    client = Client(schema)
    result = client.execute(query)
    assert result == expected


@pytest.mark.django_db
def test_create_unit_mutation():
    query = """
                    mutation {
                        createUnit(unitData:{
                                title:"JavaScript basics",
                                about:["Variables","Data Types Overview","Strings", "Numbers", "Booleans"],
                                description:"An introduction to core JavaScript functionality",
                                imageUrl:"https://cdn.pixabay.com/photo/2019/10/03/12/12/javascript-4523100_960_720.jpg"
                                }) {
                            unit {
                                title
                                about
                                description
                                imageUrl
                            }
                        }
                    }
                  """

    expected = {
        "data": {
            "createUnit": {
                "unit": {
                    "title": "JavaScript basics",
                    "about": ["Variables","Data Types Overview","Strings", "Numbers", "Booleans"],
                    "description": "An introduction to core JavaScript functionality",
                    "imageUrl": "https://cdn.pixabay.com/photo/2019/10/03/12/12/javascript-4523100_960_720.jpg"
                }
            }
        }
    }

    factory = RequestFactory()
    request = factory.post(reverse("graphql-query"))
    client = Client(schema)
    result = client.execute(query, context=request)
    assert result == expected



def test_update_unit_mutation(fixtures_data):
    query = """
                    mutation {
                        updateUnit(unitData:{
                                id: "107f1f77bcf86cd799439011",
                                title:"Functional JavaScript Updated",
                                about: ["Higher order functions","reduce, filter","Function composition", "Closure","Pure functions", "Partial application and currying"],
                                }) {
                            unit {
                                title
                                about
                                description
                                imageUrl
                            }
                        }
                    }
                  """

    expected = {
        "data": {
            "updateUnit": {
                "unit": {
                    "title":"Functional JavaScript Updated",
                    "about": ["Higher order functions","reduce, filter","Function composition", "Closure","Pure functions", "Partial application and currying"],
                    "description": "Functional programming - a paradigm for structuring our complex code",
                    "imageUrl":"https://cdn.pixabay.com/photo/2015/11/24/10/52/gears-1059756_960_720.png"
                   
                }
            }
        }
    }

    factory = RequestFactory()
    request = factory.post(reverse("graphql-query"))
    client = Client(schema)
    result = client.execute(query, context=request)
    print(result)
    assert result == expected


def test_delete_unit_mutation(fixtures_data):
    query = """
                mutation {
                  deleteUnit(id: "107f1f77bcf86cd799439011"){
                    success
                  }
                }
              """

    expected = {
                "data": {
                  "deleteUnit": {
                    "success": True
                  }
                }
                }

    factory = RequestFactory()
    request = factory.post(reverse("graphql-query"))
    client = Client(schema)
    result = client.execute(query, context=request)
    assert result == expected