import "./loadEnvironment.js";
import express from "express";
import morgan from "morgan";
import debug from "debug";
import chalk from "chalk";
import thingsRouter from "./routers/thingsRouter.js";

const port = process.env.PORT ?? 4001;
const app = express();
const createDebug = debug("/things");

app.use(morgan("dev"));

app.use("/things", thingsRouter);

app.listen(port, () => {
  createDebug(chalk.bgWhiteBright("T'estic escoltant, carinyo"));
});
