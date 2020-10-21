import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import "reflect-metadata";
import { createConnection } from "typeorm";
import path from "path";
import userController from "./Controllers/UserController";

console.log(path.join(__dirname, "Models", "**", "*.{ts,js}"));

dotenv.config();

createConnection();

// createConnection().then((connection) => {
// let defaultConnection = connection;
const app = express();
app.use(bodyParser.json());
const port = process.env.PORT || 5000;

//   const userRepo = getRepository(User);
//   userRepo.create(testUser);

app.use("/api", userController);

app.listen(port, () => {
  console.log("🦻 listening on " + port);
});
// });
