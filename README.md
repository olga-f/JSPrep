# JSPrep.org website

JS Prep

##### Table of Contents

- [Description](#description)
- [Client](#client)
  - [Getting started](#getting-started)
- [Server](#server)
  - [Setup](#setup)
    - [Virtual environment](#virtual-environment)
    - [Dependencies](#dependencies)
    - [MongoDB database](#mongodb-database)
  - [GraphQL Query and Mutation Examples](#graphql-query-and-mutation-examples)
  - [Testing](#testing)
- [YouTube presentation](#youtube)

## Description

This repository holds the source code for the https://jsprep.org site.

This site is a progressive web application built with React, GraphQL, backed by Django.

The `client` folder contains all necessary code for running React front-end application.
The `server` folder contains the back-end Django application.

## Client

### Getting started

First, you'll need to get the source of the project. Do this by cloning the whole JSPrep repository:

`git clone git@github.com:olga-f/jsprep.org.git`

`cd server`

## Server

### Setup

First, you'll need to get the source of the project. Do this by cloning the whole JSPrep repository:

`git clone git@github.com:olga-f/jsprep.org.git`

`cd server`

#### Virtual environment

Create a virtual environment in which you can install the dependencies:

`python -m venv env`

`source env/Scripts/activate`

#### Dependencies

Now install the dependencies:

`pip install -r requirements.txt`

#### MongoDB database

Set up a MongoDB connection and create a database

> 🔹 [MongoDB Atlas](https://www.mongodb.com/) offers Free Shared Clusters.

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

> If you want, you can create units and exercises without using the React front-end app.

### GraphQL Query and Mutation Examples

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

_Query all units from the database:_

```
query {
  unitList {
    id
    title
    slug
    about
    description
    imageUrl
    position
  }
}
```

_Create exercise:_

```
mutation ($data: ExerciseInput!, $enum: ExerciseCategory) {
  createExercise (exerciseData: $data, categoryEnum: $enum) {
    exercise {
      name
      unit {
        id
      }
    }

  }
}
```

_with variables:_

```
{
  "data": {
    "unit": "60570791cd82a786dc25de50",
    "name": "Test Exercise"
  },
  "enum": "CHALLENGE"
}
```

_Query all unit exercises from the database:_

```
query ($id: ID!) {
  exerciseList (unitId: $id) {
    name
    slug
    unit {
      id
    }
    description
    position
  }
}
```

### Testing

For run tests, you need to:

- activate your virtual environment:

```
cd server
```

```
source env/Scripts/activate
```

- run **pytest**:

```
pytest -v
```

## YouTube
