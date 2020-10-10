import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import "reflect-metadata";

dotenv.config();
export const app = express();
app.use(bodyParser.json());

const port = process.env.PORT || 3001;

app.get("/", function (req: Request, res: Response) {
  res.json({ message: "Hello world" });
});

app.listen(port, () => {
  console.log("listening on " + port);
});

//e-commerce
