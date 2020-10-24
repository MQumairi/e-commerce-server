import { Request, Response } from "express";
import { getRepository } from "typeorm";
import jwt from "jsonwebtoken";
import User from "../../Models/Users/User";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();

const Login = async (req: Request, res: Response) => {
  const request = req.body;

  //Find the user
  const userRepo = getRepository(User);
  const user = await userRepo.findOne({
    where: { username: request.username },
  });

  if (user == null) {
    res.status(403).send("invalid credentials");
    return;
  }

  const comparison = await bcrypt.compare(request.password, user.password);

  if (!comparison) {
    res.status(403).send("invalid credentials");
    return;
  }

  //Payload
  const payload = {
    id: user.id,
    username: user.username,
    email: user.email,
  };

  //Encode the user into token
  const jwtToken = jwt.sign(payload, process.env.JWT_SECRET);

  res.status(200).send(jwtToken);
};

export default Login;
