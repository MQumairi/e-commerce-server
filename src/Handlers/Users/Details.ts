import { Request, Response } from "express";
import { getRepository } from "typeorm";
import User from "../../Models/Users/User";

const Details = async (
  req: Request,
  res: Response
): Promise<User | undefined> => {
  const id = +req.params.id;
  const user = await getRepository(User).findOne(id);

  if (user === undefined) res.status(404).send("User not found");
  res.json(user);

  return user;
};

export default Details;
