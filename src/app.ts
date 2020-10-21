import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import "reflect-metadata";
import { createConnection } from "typeorm";
import userController from "./Controllers/UserController";
import storageAddressController from "./Controllers/StorageAddressController";
import uploadSample from "./Functions/ImageUploader";

dotenv.config();

createConnection();

// uploadSample("/Users/mqumairi/Desktop/flowers.jpg");

const app = express();
app.use(bodyParser.json());
const port = process.env.PORT || 5000;

app.use("/api/users", userController);
app.use("/api/storage-addresses", storageAddressController);

app.listen(port, () => {
  console.log("🦻 listening on " + port);
});
// });
