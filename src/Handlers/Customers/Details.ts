import { Request, Response } from "express";
import { getRepository } from "typeorm";
import Customer from "../../Models/Users/Customer";

const Details = async (
  req: Request,
  res: Response
): Promise<Customer | undefined> => {
  const id = +req.params.id;
  const customer = await getRepository(Customer).findOne(id);

  if (customer === undefined) {
    res.status(404).send("Customer not found");
    return;
  }

  res.status(200).send(customer);

  return customer;
};

export default Details;
