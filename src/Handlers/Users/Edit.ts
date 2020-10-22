import { Request, Response } from "express";
import { getRepository } from "typeorm";
import User from "../../Models/Users/User";
import EditMapper from "../../Functions/EditMapper";

const Edit = async (req: Request, res: Response): Promise<User | undefined> => {
  const id = +req.params.id;
  const userRepo = getRepository(User);

  //Find the user
  let foundUser = await userRepo.findOne(id);

  //Check that they exist
  if (foundUser === undefined) {
    res.status(404).send("User not found");
    return;
  }

  //Get the requested changes
  let request = req.body;

  //Map the changes to the new user
  foundUser = EditMapper(foundUser, request);

  //Save to database
  await userRepo.save(foundUser!);

  //Respond with message
  res.status(201).send(foundUser);

  //Return
  return foundUser;
};

export default Edit;
