import { Request, Response } from "express";
import { getRepository } from "typeorm";
import EditMapper from "../../Functions/EditMapper";
import StorageAddress from "../../Models/Address/StorageAddress";

const Edit = async (
  req: Request,
  res: Response
): Promise<StorageAddress | undefined> => {
  const id = +req.params.id;
  const storageAddressRepo = getRepository(StorageAddress);

  //Find the storageAddress
  let foundStorageAddress = await storageAddressRepo.findOne(id);

  //Check that they exist
  if (foundStorageAddress === undefined)
    res.status(404).send("StorageAddress not found");

  //Get the requested changes
  let request = req.body;

  //Map the changes to the new storageAddress
  foundStorageAddress = EditMapper(foundStorageAddress, request);

  //Save to database
  await storageAddressRepo.save(foundStorageAddress!);

  //Respond with message
  res.status(201).send(foundStorageAddress);

  //Return
  return foundStorageAddress;
};

export default Edit;
