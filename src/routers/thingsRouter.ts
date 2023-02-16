import { Router } from "express";
import { getThing, getThings } from "../controllers/thingsController.js";

// eslint-disable-next-line new-cap
const thingsRouter = Router();

thingsRouter.get("/", getThings);
thingsRouter.get("/:idThing", getThing);

export default thingsRouter;
