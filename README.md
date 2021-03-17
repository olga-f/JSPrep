# capstone

# Server

## Getting started

First you'll need to get the source of the project. Do this by cloning the whole JSPrep repository:

`git clone git@github.com:olga-f/capstone.git`

`cd server`

#### Create a virtual environment in which we can install the dependencies

`python -m venv env`

`source env/Scripts/activate`

#### Now we can install our dependencies:

`pip install -r requirements.txt`

#### Setup a mongodb connection and create a database.

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

For example:

```
mutation($input: BikeInput!) {
  createBike(bikeData: $input) {
    bike {
      name
      brand
      year
      size
      wheelSize
      type
    }
  }
} 

```
query variables:
```
{
  "input": {
    "name": "Greg",
    "brand": "Variables",
    "year": "2021",
    "size": "XX",
    "wheelSize": 2.0,
    "type": "smalltype"
  }
}
```

For tests run:

`pytest -v`
