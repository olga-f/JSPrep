import pytest
from django.urls import reverse
from django.test import RequestFactory
from graphene.test import Client
from .schema import schema
from .fixtures import fixtures_data


def test_exercise_data_query(fixtures_data):
    query = """{
                exerciseList (unitId:"60570791cd82a786dc25de50") {
                    name
                    description
               }
                }"""

    expected = {
        "data": {
            "exerciseList": [
                {
                    "name":"Test Exercise 1",
                    "description": "Test Exercise Description 1"
                  

                },
                 {
                    "name":"Test Exercise 3",
                    "description": "Test Exercise Description 3"
                }
            ]
        }
    }

    client = Client(schema)
    result = client.execute(query)
    assert result == expected


@pytest.mark.django_db
def test_create_exercise_mutation():
    query = """
          mutation {
                        createExercise(exerciseData:{
                                name:"JavaScript challenge",
                                description:"Strings",
                                unit:"60570791cd82a786dc25de50"
                        }, categoryEnum: CHALLENGE) {
                            exercise {
                                name
                                description
                                category
                            }
                        }
                    }

                  """

    expected = {
    "data": {
       "createExercise": {
         "exercise": {
           "name": "JavaScript challenge",
           "description": "Strings",
           "category": "C"
          }
        }
      }
    }

    factory = RequestFactory()
    request = factory.post(reverse("graphql-query"))
    client = Client(schema)
    result = client.execute(query, context=request)
    assert result == expected



def test_update_exercise_mutation(fixtures_data):
    query = """
                    mutation {
                        updateExercise(exerciseData:{
                                id: "678f1f77bcf86cd799439011",
                                name: "Test Exercise 1 Updated",
                                position:2,
                                }) {
                            exercise {
                                name
                                description
                                position
                            }
                        }
                    }
                  """

    expected = {
        "data": {
            "updateExercise": {
                "exercise": {
                    "name":"Test Exercise 1 Updated",
                    "description": "Test Exercise Description 1",
                    "position":2 
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


def test_delete_exercise_mutation(fixtures_data):
    query = """
                mutation {
                  deleteExercise(id: "447f1f77bcf86cd799439011"){
                    success
                  }
                }
              """

    expected = {
                "data": {
                  "deleteExercise": {
                    "success": True
                  }
                }
                }

    factory = RequestFactory()
    request = factory.post(reverse("graphql-query"))
    client = Client(schema)
    result = client.execute(query, context=request)
    assert result == expected