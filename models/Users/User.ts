import Role from "./Role";
import Avatar from "../Images/Avatar";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  TableInheritance,
} from "typeorm";
import ImageAsset from "../Images/ImageAsset";
import UserComment from "../Products/UserComment";

@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })
export default class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  email: string;

  @OneToOne((type) => Avatar, (avatar) => avatar.user)
  @JoinColumn()
  avatar?: Avatar;

  @OneToMany((type) => ImageAsset, (imageAsset) => imageAsset.uploader)
  imageAssets: ImageAsset[];

  @ManyToOne((type) => Role, (role) => role.users)
  role?: Role;

  @Column()
  published_comments: UserComment[];
}
