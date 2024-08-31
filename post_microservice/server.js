import express from "express";
import "dotenv/config";
import cors from "cors";

const app = express();
const port = process.env.PORT || 7999;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get("/", (req, res) => {
  return res.json({ message: "Its working post micro" });
});

import Routes from "./routes/index.js";
app.use(Routes);

app.listen(port, () => console.log(`server running on http://localhost:7879`));
