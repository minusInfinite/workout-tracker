# workout-tracker

A workout tracker with a mongo server

Demo: <https://minusinfinite-wt-demo.herokuapp.com/>

## Contents

[Local Deployment](#local-deployment)

[To-Do](#to-do)

[Examples](#examples)

## Local Deployment

This Application uses [MongoDB](https://www.mongodb.com/) as it's database and
[Mongoose JS](https://mongoosejs.com/) as the Objection Document Model for providing schema models and queries.

Be sure to have MongoDB setup an running before you download.

### Download

In your terminal download the repo

```terminal
git clone https://github.com/minusInfinite/nobeBBS.git
```

Once downloaded install the dependencies with NPM

```terminal
npm install
```

If you local MongoDB has Authentication setup it might be easier to confirm a Node Environment Parameter. You edit the .env.EXAMPLE file to .env with the following

> MONGODB*URI - \_The database connection URL string*

You can find more details about MongoDB connection strings here - https://docs.mongodb.com/manual/reference/connection-string/

Once you .env is setup you should be able to run the server

```terminal
npm start
```

Or for development

```terminal
npm run watch
```

There is an example data set on file you can use for tested

Populate the database with the follow script.

```terminal
npm run seed
```

You can edit the dataset in seeder/seed.js

## Example

[Live Demo](https://nodebbs-demo.herokuapp.com/)

![Animated Demo GIF](/md/workout-demo.gif)
