import { Router, Request, Response } from "express";
import Login from "../Handlers/Authentication/Login";
import RegisterCustomer from "../Handlers/Authentication/RegisterCustomer";
import VerifyUser from "../Handlers/Authentication/VerifyUser";

const authController = Router();

authController.get("/secret", VerifyUser, (req: Request, res: Response) => {
  console.log(req["currentUser"]);
  res.send("Reached the secret!");
});

authController.post("/login", async (req: Request, res: Response) => {
  await Login(req, res);
});

authController.post("/register", async (req: Request, res: Response) => {
  await RegisterCustomer(req, res);
});

export default authController;
