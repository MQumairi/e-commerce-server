import { Request, Response } from "express";
import { getRepository } from "typeorm";
import Customer from "../../Models/Users/Customer";

const EditPassword = async (
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
    current_password: request.current_password,
    new_password: request.new_password,
    confirmed_password: request.confirmed_password,
  };

  //Check current_password against foundCustomer password
  if (foundCustomer.password != requestedEdits.current_password) {
    res.status(400).send("Incorrect password");
    return;
  }

  //Check new_password against confirmed_password
  if (requestedEdits.new_password != requestedEdits.confirmed_password) {
    res.status(400).send("Mismatching passwords");
    return;
  }

  //Edit the customer's password
  foundCustomer.password = requestedEdits.new_password;

  //Save to database
  await customerRepo.save(foundCustomer!);

  //Respond with message
  res.status(201).send(foundCustomer);

  //Return
  return foundCustomer;
};

export default EditPassword;
