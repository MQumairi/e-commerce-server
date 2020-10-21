import { Request, Response } from "express";
import { getRepository } from "typeorm";
import StorageAddress from "../../Models/Address/StorageAddress";

const Details = async (
  req: Request,
  res: Response
): Promise<StorageAddress | undefined> => {
  const id = +req.params.id;
  const storageAddress = await getRepository(StorageAddress).findOne(id);

  if (storageAddress === undefined)
    res.status(404).send("StorageAddress not found");
  res.json(storageAddress);

  return storageAddress;
};

export default Details;
