import pytest
from .models import Unit, Exercise

def fixture_exercise_data():
    Exercise.drop_collection()
    exercise_one = Exercise(
        id="678f1f77bcf86cd799439011",
        name="Test Exercise 1",
        unit= "60570791cd82a786dc25de50",
        description= "Test Exercise Description 1",
        position=1

    )
    exercise_one.save()
    exercise_two = Exercise(
        id="307f1f77bcf86cd799439011",
        name="Test Exercise 2",
        unit= "10570791cd82a786dc25de50",
        description= "Test Exercise Description 2",
        position=2

    )
    exercise_two.save()
    exercise_three = Exercise(
        id="447f1f77bcf86cd799439011",
        name="Test Exercise 3",
        unit= "60570791cd82a786dc25de50",
        description= "Test Exercise Description 3",
        position=3

    )
    exercise_three.save()
    
def fixture_unit_data():
    Unit.drop_collection()
    unit_one = Unit(
        id="907f1f77bcf86cd799439011",
        title="Unit 1",
        about=["A", "B", "C", "D"],
        description="This is a test unit 1",
        image_url="https://example.com/unit1.jpg"
    )
    unit_one.save()

    unit_two = Unit(
        id="607f1f77bcf86cd799439011",
        title="UNIT 2",
        about=["a", "b", "c"],
        description="THIS IS a test unit 2",
        image_url="https://example.com/unit2.jpg",
    )
    unit_two.save()

    unit_three = Unit(
        id="107f1f77bcf86cd799439011",
        title="Functional JavaScript",
        about=["Higher order functions","reduce, filter","Function composition", "Closure", "Partial application"],
        description="Functional programming - a paradigm for structuring our complex code",
        image_url="https://cdn.pixabay.com/photo/2015/11/24/10/52/gears-1059756_960_720.png"
    )
    unit_three.save()





@pytest.fixture(scope="module")
def fixtures_data():
    fixture_unit_data()
    fixture_exercise_data()

    return True