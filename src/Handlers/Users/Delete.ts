import { Request, Response } from "express";
import { getRepository } from "typeorm";
import User from "../../Models/Users/User";

const Delete = async (req: Request, res: Response): Promise<void> => {
  const id = +req.params.id;
  const userRepo = getRepository(User);
  const user = await userRepo.findOne(id);
  if (user === undefined) return;
  userRepo.remove(user!);
  res.status(200).send("Removed " + user.username);
};

export default Delete;
