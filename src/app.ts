import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import "reflect-metadata";
import { createConnection } from "typeorm";
import userController from "./Controllers/UserController";
import storageAddressController from "./Controllers/StorageAddressController";
import productController from "./Controllers/ProductController";
import customerController from "./Controllers/CustomerController";
import authController from "./Controllers/AuthController";

dotenv.config();

createConnection();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 5000;

app.use("/api/users", userController);
app.use("/api/storage-addresses", storageAddressController);
app.use("/api/products", productController);
app.use("/api/customers", customerController);
app.use("/api/auth", authController);

app.listen(port, () => {
  console.log("🦻 listening on " + port);
});
