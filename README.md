# capstone

## Server

#### Getting started.

First, you'll need to get the source of the project. Do this by cloning the whole JSPrep repository:

`git clone git@github.com:olga-f/capstone.git`

`cd server`

#### Create a virtual environment in which we can install the dependencies.

`python -m venv env`

`source env/Scripts/activate`

#### Now we can install our dependencies.

`pip install -r requirements.txt`

#### Set up a MongoDB connection and create a database.

> 🔹 [MongoDB Atlas] (https://www.mongodb.com/) offers Free Shared Clusters.

1. Add `.env` file with your mongodb credentials to the `server` folder.

```
SECRET_KEY=gozaXXXXXXXXXXXXXXXXXXXXXXXX
DEBUG=True
_MONGODB_URI=mongodb+srv://XXXXXXX:XXXXXXXXXXX@clusterX.XXXXXX.mongodb.net/test?retryWrites=true&w=majority

```

2. Run the following command:

`python manage.py migrate`

3. Start the server:

`python manage.py runserver`

Now head on over to http://127.0.0.1:8000/graphql and run some queries!

_For example:_

```
mutation($input: UnitInput!) {
  createUnit(unitData: $input) {
    unit {
      title
      about
      description
      imageUrl
    }
  }
}

```

_with variables:_

```
{
  "input": {
    "title": "JavaScript basics",
    "about": ["Variables","Data Types Overview","Strings", "Numbers", "Booleans"],
    "description": "An introduction to core JavaScript functionality",
    "imageUrl": "https://cdn.pixabay.com/photo/2019/10/03/12/12/javascript-4523100_960_720.jpg"
  }
}
```

---

_Query all units from the database_

```
query {
  unitList {
    title
    about
    description
    imageUrl
    position
  }
}

```

_Query all exercises from the Unit (do not forget to add the variable id of the Unit) from the database._

```
query ($id: ID!) {
  exerciseList (unitId: $id) {
    name
    unit {
      id
    }
    description
    position
  }
}
```

For run tests, you need to:

1. Activate your virtual environment:

```
cd server
```

```
source env/Scripts/activate
```

2. Run **pytest**:

```
pytest -v
```
