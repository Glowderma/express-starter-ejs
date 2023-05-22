import express from 'express';
import { getDirName } from './helper.js';
import path from "path";
const dirName = getDirName(import.meta.url);

import indexRouter from './routes/index.js';

const app = express();

// view engine setup
app.set('views', path.join(dirName, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(dirName, 'public')));

app.use('/', indexRouter);

export default app;
