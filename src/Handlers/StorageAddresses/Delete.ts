import { Request, Response } from "express";
import { getRepository } from "typeorm";
import StorageAddress from "../../Models/Address/StorageAddress";

const Delete = async (req: Request, res: Response): Promise<void> => {
  const id = +req.params.id;
  const storageAddressRepo = getRepository(StorageAddress);
  const storageAddress = await storageAddressRepo.findOne(id);
  if (storageAddress === undefined) res.status(404).send("Not found");
  await storageAddressRepo.remove(storageAddress!);
  res.status(200).send("Removed this address from " + storageAddress.owner);
};

export default Delete;
