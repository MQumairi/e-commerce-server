import { Request, Response } from "express";
import { getRepository } from "typeorm";
import EditMapper from "../../Functions/EditMapper";
import Customer from "../../Models/Users/Customer";

const Edit = async (
  req: Request,
  res: Response
): Promise<Customer | undefined> => {
  const id = +req.params.id;
  const customerRepo = getRepository(Customer);

  //Find the customer
  let foundCustomer = await customerRepo.findOne(id);

  //Check that they exist
  if (foundCustomer === undefined) res.status(404).send("Customer not found");

  //Get the requested changes
  let request = req.body;

  let requestedEdits = {
    username: request.username,
    first_name: request.first_name,
    last_name: request.last_name,
    email: request.email,
    phone: request.phone,
  };

  //Map the changes to the new customer
  foundCustomer = EditMapper(foundCustomer, requestedEdits);

  //Save to database
  await customerRepo.save(foundCustomer!);

  //Respond with message
  res.status(201).send(foundCustomer);

  //Return
  return foundCustomer;
};

export default Edit;
