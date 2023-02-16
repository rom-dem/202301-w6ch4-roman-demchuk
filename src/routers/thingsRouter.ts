import { Router } from "express";
import {
  deleteThing,
  getThing,
  getThings,
} from "../controllers/thingsController.js";

// eslint-disable-next-line new-cap
const thingsRouter = Router();

thingsRouter.get("/", getThings);
thingsRouter.get("/:idThing", getThing);
thingsRouter.delete("/:idThing", deleteThing);

export default thingsRouter;
