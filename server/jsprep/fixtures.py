import pytest
from .models import Unit
from mongoengine import connect


def fixture_unit_data():
    Unit.drop_collection()
    unit_one = Unit(
        title="Unit 1",
        about=["A", "B", "C", "D"],
        description="This is a test unit 1",
        image_url="https://example.com/unit1.jpg"
    )
    unit_one.save()

    unit_two = Unit(
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


# def fixture_shop_data():
#     Shop.drop_collection()
#     shop_one = Shop(
#         name="Big Wheel Bicycles",
#         address="2438 Hart Ridge Road",
#         website="https://www.bigwheelunit.test",
#     )
#     shop_one.save()
#     shop_two = Shop(
#         name="Unit Tech",
#         address="2175 Pearl Street",
#         website="https://www.unittech.test",
#     )
#     shop_two.save()


@pytest.fixture(scope="module")
def fixtures_data():
    fixture_unit_data()
    # fixture_shop_data()

    return True