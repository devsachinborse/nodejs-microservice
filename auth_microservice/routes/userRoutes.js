import { Router } from "express";
import UserHandler from "../handlers/userHandlers.js";

const router = Router();

router.get("/getUser/:id", UserHandler.getUser);
router.post("/getUsers", UserHandler.getUsers);

export default router;
