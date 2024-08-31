import { Router } from "express";
import PostRoutes from "./postRoute.js";

const router = Router();

router.use("/api", PostRoutes);

export default router;
