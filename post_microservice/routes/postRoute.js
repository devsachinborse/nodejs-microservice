import { Router } from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import postHandler from "../handlers/postHandler.js";

const router = Router();

router.get("/post", postHandler.index);
router.post("/post", authMiddleware, postHandler.store);

export default router;
