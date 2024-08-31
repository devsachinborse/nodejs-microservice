import { Router } from "express";
import handlers from "../handlers/handlers.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = Router();

router.post("/auth/register", handlers.register);
router.post("/auth/login", handlers.login);

//private route
router.get("/auth/user", authMiddleware, handlers.user);

export default router;
