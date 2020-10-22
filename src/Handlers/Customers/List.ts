import { Request, Response } from "express";
import { getRepository } from "typeorm";
import Customer from "../../Models/Users/Customer";

const List = async (req: Request, res: Response): Promise<Customer[]> => {
  const customerRepo = getRepository(Customer);
  const customerList = await customerRepo.find();
  res.json(customerList);
  return customerList;
};

export default List;
