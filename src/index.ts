import express, { Request, Response } from "express";
import { router } from "./routes/loginRoutes";

const app = express();

app.use(router);

app.listen(3_000, () => {
    console.log('Listening on port 3000');
});