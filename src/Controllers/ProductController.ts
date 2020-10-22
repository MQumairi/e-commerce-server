import { Router, Request, Response } from "express";
import Create from "../Handlers/Products/Create";
import multer from "multer";
import List from "../Handlers/Products/List";
import Details from "../Handlers/Products/Details";
import Delete from "../Handlers/Products/Delete";

const productController = Router();

let upload = multer();

//Create a product
productController.post(
  "/",
  upload.array("files", 5),
  (req: Request, res: Response) => {
    Create(req, res);
  }
);

//List products
productController.get("/", async (req: Request, res: Response) => {
  await List(req, res);
});

//Product Details
productController.get("/:id", async (req: Request, res: Response) => {
  await Details(req, res);
});

//Delete Product
productController.delete("/:id", async (req: Request, res: Response) => {
  await Delete(req, res);
});

export default productController;
