import { Router, Request, Response } from "express";
import List from "../Handlers/Users/List";
import Details from "../Handlers/Users/Details";
import Create from "../Handlers/Users/Create";
import Edit from "../Handlers/Users/Edit";
import Delete from "../Handlers/Users/Delete";

const userController = Router();

//List all users
userController.get("/", async (req: Request, res: Response) => {
  await List(req, res);
});

//Get specific user by Id
userController.get("/:id", async (req: Request, res: Response) => {
  await Details(req, res);
});

//Create a user
userController.post("/", async (req: Request, res: Response) => {
  await Create(req, res);
});

//Edit a user
userController.put("/:id", async (req: Request, res: Response) => {
  await Edit(req, res);
});

//Delete a user
userController.delete("/:id", async (req: Request, res: Response) => {
  await Delete(req, res);
});

export default userController;
