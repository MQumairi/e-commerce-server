import { Request, Response } from "express";
import { getRepository } from "typeorm";
import User from "../../Models/Users/User";

const Create = async (req: Request, res: Response): Promise<User> => {
  let user: User = req.body;
  const userRepo = getRepository(User);
  userRepo.save(user);
  res.status(201).send(user);
  return user;
};

export default Create;
