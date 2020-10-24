import { Request, Response } from "express";
import { getRepository } from "typeorm";
import User from "../../Models/Users/User";
import bcrypt from "bcrypt";

const Create = async (req: Request, res: Response): Promise<User> => {
  const request = req.body;

  const salt = await bcrypt.genSalt(10);
  const passHash = await bcrypt.hash(request.password, salt);

  let user: User = {
    username: request.username,
    password: passHash,
    first_name: request.first_name,
    last_name: request.last_name,
    email: request.email,
  };

  const userRepo = getRepository(User);
  await userRepo.save(user);
  res.status(201).send(user);
  return user;
};

export default Create;
