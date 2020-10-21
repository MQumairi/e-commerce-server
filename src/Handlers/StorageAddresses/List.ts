import { Request, Response } from "express";
import { getRepository } from "typeorm";
import StorageAddress from "../../Models/Address/StorageAddress";

const List = async (req: Request, res: Response): Promise<StorageAddress[]> => {
  const storageAddressRepo = getRepository(StorageAddress);
  const storageAddressList = await storageAddressRepo.find();
  res.json(storageAddressList);
  return storageAddressList;
};

export default List;
