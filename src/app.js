import express from 'express';
import { getDirName } from './utils/helper.js';
import path from "path";
import indexRouter from './routes/index.routes.js';
import cors from "cors";
import {auth, authLocal} from "./middleware/auth.js";
import {api} from "./utils/env.js";
import { rateLimit } from 'express-rate-limit';

const app = express();
const dirName = getDirName(import.meta.url);

app.set('views', path.join(dirName, 'views'));
app.set('view engine', 'ejs');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/static", express.static(path.join(dirName, 'public')));
app.use("/bootstrap", express.static(path.join(dirName, "../node_modules/bootstrap/dist")));
app.use("/jquery", express.static(path.join(dirName, "../node_modules/jquery/dist")));

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    standardHeaders: true,
    legacyHeaders: false,
});
app.use(limiter);

if(api.nodeEnv !== "local") {
    app.use(auth);
} else {
    app.use(authLocal);
}

app.use('/', indexRouter);
app.all('*', function (req, res) {
    res.status(404).json({
        statusId : "0",
        message : req.method + " to " + req.url + " does not exist",
        resbody : null
    });
});

export default app;
