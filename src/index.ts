import "./loadEnvironment.js";
import express from "express";
import morgan from "morgan";
import debug from "debug";
import chalk from "chalk";
import thingsThatAyKnow from "./data/thingsThatIKnow.js";
import { getThing, getThings } from "./controllers/thingsController.js";
import thingsRouter from "./routers/thingsRouter.js";

const app = express();
const createDebug = debug("/things");

app.use(morgan("dev"));

const port = process.env.PORT ?? 4001;

app.use("/things", thingsRouter);

app.listen(port, () => {
  createDebug(chalk.bgWhiteBright("T'estic escoltant, carinyo"));
});
