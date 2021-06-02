<div align="right">

[![Build Status](https://dev.azure.com/olga-f/JSPrep.org/_apis/build/status/olga-f.jsprep-server?branchName=main)](https://dev.azure.com/olga-f/JSPrep.org/_build/latest?definitionId=36&branchName=main)
![Vercel](https://therealsujitk-vercel-badge.vercel.app/?app=jsprep-org)

</div>
<div align="center">
<img alt="JS Prep logo" height="250" src="https://raw.githubusercontent.com/olga-f/olga-f/master/img/jsprep/jsprep.jpg"/>
<h4 align="center"> <i>Practice JavaScript coding</i> </h4>
<strong><a href="https://jsprep.org"><b>jsprep.org</b></a></strong>
</div>

---
<div align="center">
<img alt="Next JS" src="https://img.shields.io/badge/nextjs-%23000000.svg?&style=for-the-badge&logo=next.js&logoColor=white"/>
<img alt="GraphQL" src="https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql"/>
<img alt="Django" src="https://img.shields.io/badge/django-%23092E20.svg?&style=for-the-badge&logo=django&logoColor=white"/>
<img alt="MongoDB" src ="https://img.shields.io/badge/MongoDB-%234ea94b.svg?&style=for-the-badge&logo=mongodb&logoColor=white"/></div>





##### Table of Contents

- [Description](#description)
- [Client](#client)
  - [Getting started](#getting-started)
  - [What is inside](#what-is-inside)
  - [Design System](#design-system)
  - [Front-end Testing](#front-end-testing)
- [Server](#server)
  - [Setup](#setup)
    - [Virtual environment](#virtual-environment)
    - [Dependencies](#dependencies)
    - [MongoDB database](#mongodb-database)
  - [GraphQL Query and Mutation Examples](#graphql-query-and-mutation-examples)
  - [Testing](#testing)

## Description

This repository holds the source code for the [https://jsprep.org site](https://jsprep.org).

### Distinctiveness and Complexity

You can use this project with your JavaScript code tutorials and challenges. 
The repository includes sandboxed code editor for running your JavaScript code directly in the web application.

This project is optimized for the best performance and successfully passes Google's [Rich Results Test](https://search.google.com/test/rich-results) and [Lighthouse](https://developers.google.com/web/tools/lighthouse).

The web application uses [React](https://reactjs.org/), [GraphQL](https://graphql.org/), backed by [Django](https://www.djangoproject.com/).


<br/>
<br/>
<img alt="JS Prep Lighthouse Test" src="https://raw.githubusercontent.com/olga-f/olga-f/master/img/jsprep/performance.gif"/>

<br/>
<br/>
<div align="center">
<img alt="JS Prep.org" height="450" src="https://raw.githubusercontent.com/olga-f/olga-f/master/img/jsprep/movil.png"/>
</div>
<br/>
<br/>




On the front-end, this project utilizes [Apollo Client](https://www.apollographql.com/docs/react/) - JavaScript GraphQL client. Apollo Client takes care of the request cycle from start to finish, including tracking loading and error states. 




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

After, please go to the front-end source folder: /client

```
cd client
```
Install and validate your project by running the following command:

```
npm run setup
```
### What is inside
This project uses the Next.js framework that helps build web applications using React.js. 
> Check out [why Next.js](https://olga-f.gitbook.io/react/next-js/why-next.js)

This application use mostly static site generation with some client-side rendering using in both cases [Apollo Client](https://www.apollographql.com/docs/react/).
> You can read more about [data fetching in Next.js](https://olga-f.gitbook.io/react/next-js/how-to-fetch-data-in-next.js)

The app includes:
* home page with a list of Units
* unit page with a list of Exercises

<img alt="Lighthouse 100 Test Unit Page" src="https://raw.githubusercontent.com/olga-f/olga-f/master/img/jsprep/unit.gif"/>

* exercise page

<img alt="Lighthouse 100 Test Exercise Page" src="https://raw.githubusercontent.com/olga-f/olga-f/master/img/jsprep/exercise.gif"/>
<br/>
<br/>

Depending on the category, the exercise page may include a javascript code editor.

<br/>

[JavaScript code runner](https://www.npmjs.com/package/javascript-code-runner) used in code editor is isolated from the global JavaScript environment. None of the DOM APIs are exposed.

<div align="center">
<img alt="javascript code editor" height="500" src="https://raw.githubusercontent.com/olga-f/olga-f/master/img/jsprep/editor.gif"/>
</div>

The code editor uses a [dedicated web worker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers#dedicated_workers). That allows us to stop running some poorly written algorithms, for example, infinite loops. 
Another reason for using a web worker is performance. A web worker performs tasks in the background, preventing the UI from freezing up. Web worker [browser support](https://caniuse.com/webworkers) is good, starting from IE10. 


### Design System

This application use [Base Web](https://app.gitbook.com/@olga-f/s/react/design-systems/base-web). 
Base Web is a design system for building websites in React. It is [open-source](https://github.com/uber/baseweb).
 
The main benefits of the Base Web design system are:
* built-in accessibility
* performance

Styletron is the CSS-in-JS engine powering Base Web. That is one of the [fastest solutions](https://ryantsao.com/blog/virtual-css-with-styletron).


### Front-end Testing

This project includes these forms of testing:

* **Static Analysis**: catch typos and type errors as you write the code.

[ESLint](https://eslint.org/) statically analyzes your code to find problems. [Prettier](https://prettier.io/) enforces a consistent code style.
This project use [TypeScript](https://www.typescriptlang.org/). By understanding JavaScript, TypeScript saves you time catching errors and providing fixes before run code.

* **Unit**: verify that individual, isolated parts work as expected. 
* **Integration**: verify that several entities work together in harmony.

This application uses JavaScript Testing Framework - [Jest](https://jestjs.io/) with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro). Tests live in the `tests` folder, when is possible, next to the file they are testing.
Jest also collects code coverage information.

* **End-to-end**: a helper robot behaves like a user to click around the app and verify that it functions correctly, sometimes called "functional testing" or e2e.

These tests are written with [cypress](https://www.cypress.io/) and [Cypress Testing Library](https://testing-library.com/docs/cypress-testing-library/intro/). End-to-end tests live in the `cypress/e2e` folder. Use `npm run test:e2e:dev` commands to open and add more tests if you want.
> Note. Change your "baseUrl" in `cypress.json` to `http://localhost:3000` for local testing.
 
 <div align="center">
<img alt="cypress jsprep.org" src="https://raw.githubusercontent.com/olga-f/olga-f/master/img/jsprep/cypress.jpg"/>
</div>
<br/>
<br/>

Please, use the following command to run static, unit, and integration tests:

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
python -m venv venv
```

Activate a virtual environment:

```
source venv/Scripts/activate
```

#### Dependencies

Now install the dependencies:

```
pip install -r requirements.txt
```

#### MongoDB database

Set up a MongoDB connection and create a database

> 🔹 [MongoDB Atlas](https://www.mongodb.com/) offers Free Shared Clusters.

1. Add `.env` file with your MongoDB credentials to the `server` folder.

```
SECRET_KEY=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
DEBUG=True
_MONGODB_URI=mongodb+srv://XXXXXXXX:XXXXXXXXXXXXXXXXX@clusterXX.XXXXXX.mongodb.net/XXXXXX?retryWrites=true&w=majority
CLIENT_APP_URL=http://localhost:3000
ALLOWED_HOSTS=['*']
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
    "unit": "6075689b18ef82cb8162f733", # <== write your unit id here
    "name": "Test Exercise"
  },
  "enum": "CHALLENGE"
}
```


### Testing

For run tests, you need to:

- activate your virtual environment:

```
cd server
```

```
source venv/Scripts/activate
```

- run **pytest**:

```
pytest -v
```

