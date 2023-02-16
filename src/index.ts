import "./loadEnvironment.js";
import express from "express";
import morgan from "morgan";
import debug from "debug";
import chalk from "chalk";

const app = express();
const createDebug = debug("/things");

app.use(morgan("dev"));

const port = process.env.PORT ?? 4001;

app.get("/things", (req, res, next) => {
  res.status(200).json({ things: "hello" });
  createDebug(chalk.bgBlue("Aquí ho tens"));
});

app.listen(port, () => {
  createDebug(chalk.bgWhiteBright("T'estic escoltant, carinyo"));
});
