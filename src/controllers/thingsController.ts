import { type Request, type Response } from "express";
import thingsThatAyKnow from "../data/thingsThatIKnow.js";
import debug from "debug";
const createDebug = debug("/things");
import chalk from "chalk";

export const getThings = (req: Request, res: Response) => {
  res.status(200).json({ thingsThatAyKnow });
  createDebug(chalk.bgBlue("Aquí tens el llistat"));
};

export const getThing = (req: Request, res: Response) => {
  const { idThing } = req.params;
  const thingAyKnow = thingsThatAyKnow.find(
    (thing) => thing.idThing === +idThing
  );
  res.status(200).json({ thingAyKnow });
  createDebug(chalk.bgBlue(`Aquí tens la cosa número ${idThing}`));
};

export const deleteThing = (req: Request, res: Response) => {
  const { idThing } = req.params;
  const position = thingsThatAyKnow.findIndex(
    (thing) => thing.idThing === +idThing
  );
  const thingToDelete = thingsThatAyKnow.splice(position, 1); // Deletes severaltimes
  res.status(200).json({ thingToDelete });
  createDebug(chalk.bgBlue("Ja no hi é"));
};
