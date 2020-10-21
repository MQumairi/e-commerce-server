import { Router, Request, Response } from "express";

const productController = Router();

//Create a product
productController.post("/products", (req: Request, res: Response) => {});

export default productController;
