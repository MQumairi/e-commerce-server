import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import "reflect-metadata";
import { createConnection } from "typeorm";
import userController from "./Controllers/UserController";
import storageAddressController from "./Controllers/StorageAddressController";
import uploadSample from "./Functions/ImageUploader";
import productController from "./Controllers/ProductController";

dotenv.config();

createConnection();

// uploadSample("/Users/mqumairi/Desktop/flowers.jpg");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(
//   fileUpload({
//     limits: { fileSize: 50 * 1024 * 1024 },
//     useTempFiles: true,
//   })
// );

const port = process.env.PORT || 5000;

app.use("/api/users", userController);
app.use("/api/storage-addresses", storageAddressController);
app.use("/api/products", productController);

app.listen(port, () => {
  console.log("🦻 listening on " + port);
});
// });
