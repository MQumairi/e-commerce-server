import { Request, Response } from "express";
import { getRepository } from "typeorm";
import User from "../../Models/Users/User";

const List = async (req: Request, res: Response): Promise<User[]> => {
  const userRepo = getRepository(User);
  const userList = await userRepo.find();
  res.json(userList);
  return userList;
};

export default List;
