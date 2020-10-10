import { ChildEntity, OneToOne } from "typeorm";
import User from "../Users/User";
import ImageAsset from "./ImageAsset";

@ChildEntity()
export default class Avatar extends ImageAsset {
  @OneToOne((type) => User, (user) => user.avatar)
  user: User;
}
