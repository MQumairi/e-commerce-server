import { Router, Request, Response } from "express";
import Create from "../Handlers/StorageAddresses/Create";
import Delete from "../Handlers/StorageAddresses/Delete";
import Details from "../Handlers/StorageAddresses/Detailts";
import Edit from "../Handlers/StorageAddresses/Edit";
import List from "../Handlers/StorageAddresses/List";

const storageAddressController = Router();

//Create
storageAddressController.post("/", async (req: Request, res: Response) => {
  await Create(req, res);
});

//List
storageAddressController.get("/", async (req: Request, res: Response) => {
  await List(req, res);
});

//Details
storageAddressController.get("/:id", async (req: Request, res: Response) => {
  await Details(req, res);
});

//Edit
storageAddressController.put("/:id", async (req: Request, res: Response) => {
  await Edit(req, res);
});

//Delete
storageAddressController.delete("/:id", async (req: Request, res: Response) => {
  await Delete(req, res);
});

export default storageAddressController;
