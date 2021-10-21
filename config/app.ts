/*=============================================
  FileName: config/app.ts
  ProjectName: COMP229-005, Assignment #1
  CompanyName: Centennial Collge, Fall 2021
  Author: Jiwoong Hong, 301153138
  Date: 2021-10-02
  ============================================*/

// Installed 3rd Party Packages


import createError, { HttpError } from "http-errors";
import express from 'express';
import path from 'path';
import cookieParser from "cookie-parser";
import logger from 'morgan';

import indexRouter from '../routes/index';
import usersRouter from '../routes/users';

// Database Setup
import mongoose from 'mongoose';
const DB = mongoose.connection;

// Point Mongoose to the DB URI
//mongoose.connect(DB.URI);
//mongoose.connect(DB.URI, {userNewUrlParser: true});

const mongoDB = mongoose.connection;
mongoDB.on('error', console.error.bind(console, 'Connection Error:'));
mongoDB.once('open', ()=> {
  console.log('Connected to MongoDB...');
});

const app = express();

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');  // express -e

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../node_modules')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(_req: any, _res: any, next: (arg0: any) => void) {
  next(createError(404));
});

// error handler
app.use(function(err: { message: any; status: any; }, req: { app: { get: (arg0: string) => string; }; }, res: { locals: { message: any; error: any; }; status: (arg0: any) => void; render: (arg0: string, arg1: { title: string; }) => void; }, next: any) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', {title: "Oops, You have an error!"});
});

export default app;
