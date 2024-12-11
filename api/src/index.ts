import bodyParser from "body-parser";
import cors from "cors";
import express, { Express, NextFunction, Request, Response } from "express";
import { Connection, getConnection } from "../database/connection";


const PORT = process.env.PORT || 5435;

const app: Express = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/', async (req: Request, res: Response, next: NextFunction) => {
    const db: Connection = await getConnection();
    res.locals.db = db;
    next();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

app.use('/api', require('./routes'));
// app.use('/users', usersRouter);

export default app;
