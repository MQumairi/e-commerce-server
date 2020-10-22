import { Request, Response } from "express";
import { getRepository } from "typeorm";
import CustomerAddress from "../../Models/Address/CustomerAddress";
import Customer from "../../Models/Users/Customer";
import { format } from "date-fns";

const Create = async (req: Request, res: Response): Promise<Customer> => {
  let request = req.body;

  //Create the address
  const customerAddressRepo = getRepository(CustomerAddress);
  const customerAddress: CustomerAddress = {
    line_1: request.line_1,
    line_2: request.line_2,
    city: request.city,
    country: request.country,
    postcode: request.postcode,
    date_assigned_to_customer: format(new Date(), "yyyy-MM-dd"),
  };

  let savedCustomerAddress = await customerAddressRepo.save(customerAddress);

  //Create the custmer
  let customer: Customer = {
    username: request.username,
    password: request.password,
    first_name: request.first_name,
    last_name: request.last_name,
    email: request.email,
    phone: request.phone,
    card_no: request.card_no,
    card_exp: request.card_exp,
    card_cvc: request.card_cvc,
    address: savedCustomerAddress,
  };
  const customerRepo = getRepository(Customer);
  await customerRepo.save(customer);

  res.status(201).send(customer);
  return customer;
};

export default Create;
