import { NextFunction, Request, Response } from "express";
import VerifyToken from "../../Functions/VerifyToken";

const VerifyUser = (req: Request, res: Response, next: NextFunction) => {
  const verification = VerifyToken(req);

  if (verification) {
    req["currentUser"] = verification;
    next();
  } else {
    res.status(403).send("Unauthorized");
  }
};

export default VerifyUser;
