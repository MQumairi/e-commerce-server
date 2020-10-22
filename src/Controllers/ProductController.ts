import { Router, Request, Response } from "express";
import Create from "../Handlers/Products/Create";
import multer from "multer";

const productController = Router();

let upload = multer();

//Create a product
productController.post(
  "/",
  upload.array("files", 12),
  (req: Request, res: Response) => {
    Create(req, res);
  }
);

export default productController;
