import { Request, Response } from "express";
import { getRepository } from "typeorm";
import Customer from "../../Models/Users/Customer";

const Delete = async (req: Request, res: Response): Promise<void> => {
  const id = +req.params.id;
  const customerRepo = getRepository(Customer);
  const customer = await customerRepo.findOne(id);
  if (customer === undefined) res.status(404).send("Not found");
  await customerRepo.remove(customer!);
  res.status(200).send("Removed " + customer.username);
};

export default Delete;
