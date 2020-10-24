import { Request } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

//A function that takes a req, and returns the payload or null
const VerifyToken = (req: Request) => {
  //Step 1: Get the authorization value from the request
  const bearerHeader: string = req.headers.authorization;

  if (bearerHeader == null) {
    return null;
  }

  //Step 2: extract the token from bearer...
  //...since the header is in format "Bearer <token>""
  const bearer = bearerHeader.split(" ");
  const bearerToken = bearer[1];

  //Step 3: Verify the token
  let currentUser = null;
  try {
    currentUser = jwt.verify(bearerToken, process.env.JWT_SECRET);
  } catch (e) {
    return null;
  }

  //Step 4: Return the payload
  return currentUser;
};

export default VerifyToken;
