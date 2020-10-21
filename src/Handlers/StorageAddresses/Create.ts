import { Request, Response } from "express";
import { getRepository } from "typeorm";
import StorageAddress from "../../Models/Address/StorageAddress";

const Create = async (req: Request, res: Response): Promise<StorageAddress> => {
  const address: StorageAddress = req.body;
  const storageAddressRepo = getRepository(StorageAddress);
  await storageAddressRepo.save(address);
  res.status(201).send(address);
  return address;
};

export default Create;
