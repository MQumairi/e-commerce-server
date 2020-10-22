import { Router, Request, Response } from "express";
import Create from "../Handlers/Customers/Create";
import Delete from "../Handlers/Customers/Delete";
import Details from "../Handlers/Customers/Details";
import Edit from "../Handlers/Customers/Edit";
import EditAddress from "../Handlers/Customers/EditAddress";
import EditPassword from "../Handlers/Customers/EditPassword";
import EditPaymentInfo from "../Handlers/Customers/EditPaymentInfo";
import List from "../Handlers/Customers/List";

const customerController = Router();

//Create
customerController.post("/", async (req: Request, res: Response) => {
  await Create(req, res);
});

//List
customerController.get("/", async (req: Request, res: Response) => {
  await List(req, res);
});

//Details
customerController.get("/:id", async (req: Request, res: Response) => {
  await Details(req, res);
});

//Edit Details
customerController.put("/:id", async (req: Request, res: Response) => {
  await Edit(req, res);
});

//Edit Password
customerController.put("/:id/password", async (req: Request, res: Response) => {
  await EditPassword(req, res);
});

//Edit Address
customerController.put("/:id/address", async (req: Request, res: Response) => {
  await EditAddress(req, res);
});

//Edit Payment Info
customerController.put(
  "/:id/payment-info",
  async (req: Request, res: Response) => {
    await EditPaymentInfo(req, res);
  }
);

//Delete
customerController.delete("/:id", async (req: Request, res: Response) => {
  await Delete(req, res);
});

export default customerController;
