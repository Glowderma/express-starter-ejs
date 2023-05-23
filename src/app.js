import express from 'express';
import { getDirName } from './utils/helper.js';
import path from "path";
import indexRouter from './routes/index.js';

const app = express();
const dirName = getDirName(import.meta.url);

app.set('views', path.join(dirName, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/static", express.static(path.join(dirName, 'public')));
app.use("/bootstrap", express.static(path.join(dirName, "../node_modules/bootstrap/dist")));
app.use("/jquery", express.static(path.join(dirName, "../node_modules/jquery/dist")));

app.use('/', indexRouter);

export default app;
