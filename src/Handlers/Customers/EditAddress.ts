import { format } from "date-fns";
import { Request, Response } from "express";
import { getRepository } from "typeorm";
import CustomerAddress from "../../Models/Address/CustomerAddress";
import Customer from "../../Models/Users/Customer";

const EditAddress = async (req: Request, res: Response) => {
  const id = +req.params.id;
  const customerRepo = getRepository(Customer);

  //Find the customer
  const foundCustomer = await customerRepo.findOne(id);

  //Check that they exist
  if (foundCustomer === undefined) res.status(404).send("Customer not found");

  //Get the request
  const request = req.body;

  //Create a new customer address
  const customerAddress: CustomerAddress = {
    line_1: request.line_1,
    line_2: request.line_2,
    city: request.city,
    country: request.country,
    postcode: request.postcode,
    customer: foundCustomer,
    date_assigned_to_customer: format(new Date(), "yyyy-MM-dd"),
  };

  const customerAddressRepo = getRepository(CustomerAddress);
  const savedAddress = await customerAddressRepo.save(customerAddress);

  //Assign this customer address to the foundCustomer
  foundCustomer.address = savedAddress;

  //Save to database
  await customerRepo.save(foundCustomer!);

  //Respond with message
  res.status(201).send("Success");
};

export default EditAddress;
