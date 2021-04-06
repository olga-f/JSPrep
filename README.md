# JSPrep.org website

JS Prep

##### Table of Contents

- [Description](#description)
- [Client](#client)
  - [Getting started](#getting-started)
  - [Front-end Testing](#front-end-testing)
- [Server](#server)
  - [Setup](#setup)
    - [Virtual environment](#virtual-environment)
    - [Dependencies](#dependencies)
    - [MongoDB database](#mongodb-database)
  - [GraphQL Query and Mutation Examples](#graphql-query-and-mutation-examples)
  - [Testing](#testing)
- [YouTube presentation](#youtube)

## Description

This repository holds the source code for the [https://jsprep.org site](https://jsprep.org).

This site is a progressive web application built with [React](https://reactjs.org/), [GraphQL](https://graphql.org/), backed by [Django](https://www.djangoproject.com/).

On the front-end, this project uses [Apollo Client](https://www.apollographql.com/docs/react/) - JavaScript GraphQL client. Apollo Client takes care of the request cycle from start to finish, including tracking loading and error states. 

On the back-end, this project uses [Graphene](https://graphene-python.org/) - a Python library for building GraphQL APIs.


The `client` folder contains all necessary code for running React front-end application.
The `server` folder contains the back-end Django application.

## Client

### Getting started

First, you'll need to get the source of the project. Do this by cloning the whole JSPrep repository:

```
git clone git@github.com:olga-f/jsprep.org.git
```

Before running your front-end application, first, you will need to run a [Server](#server).

After, please go to the front-end source folder: /client/src

```
cd client/src
```
Install and validate your project by running the following command:

```
npm run setup
```

### Front-end Testing

This project includes these forms of Testing:

* **Static Analysis**: catch typos and type errors as you write the code.
[ESLint](https://eslint.org/) statically analyzes your code to quickly find problems. [Prettier](https://prettier.io/) enforces a consistent code style.
This project use [TypeScript](https://www.typescriptlang.org/). By understanding JavaScript, TypeScript saves you time catching errors and providing fixes before you run code.
* **Unit**: verify that individual, isolated parts work as expected.
This application  use JavaScript Testing Framework - [Jest](https://jestjs.io/) with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro). Tests live in the `tests` folder next to the file they are testing.
* **Integration**: verify that several units work together in harmony. 
Tools for this include the Jest and React Testing Library. Jest also collect code coverage information.
Jest integration tests are written in almost the same way as unit tests, but they all live in the `/tests` root folder.
* **End-to-end**: a helper robot that behaves like a user to click around the app and verify that it functions correctly. Sometimes called "functional testing" or e2e.
These tests are written with [cypress](https://www.cypress.io/) and [Cypress Testing Library](https://testing-library.com/docs/cypress-testing-library/intro/). End-to-end tests live in the `cypress/e2e` folder.

To run all of these tests, please use the following command:

```
npm run validate
```


## Server

### Setup

After cloning the JSPrep repository:

```
git clone git@github.com:olga-f/jsprep.org.git
```

Go to the server project folder:

```
cd server
```

#### Virtual environment

Then create a virtual environment in which you can install the dependencies:

```
python -m venv env
```

Activate a virtual environment:

```
source env/Scripts/activate
```

#### Dependencies

Now install the dependencies:

```
pip install -r requirements.txt
```

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

```
python manage.py migrate
```

3. Start the server:

```
python manage.py runserver
```

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
