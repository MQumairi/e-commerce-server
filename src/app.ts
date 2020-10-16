import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import "reflect-metadata";
import { createConnection } from "typeorm";
import path from "path";

console.log("🏁 Start 🏁");

console.log(path.join(__dirname, "Models", "**", "*.{ts,js}"));

dotenv.config();

createConnection().then((connection) => {
  const app = express();
  app.use(bodyParser.json());
  const port = process.env.PORT || 3001;

  app.get("/", function (req: Request, res: Response) {
    res.json({ message: "Hello world" });
  });

  app.listen(port, () => {
    console.log("listening on " + port);
  });
});
