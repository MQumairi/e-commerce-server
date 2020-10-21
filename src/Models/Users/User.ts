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
// import ImageAsset from "../Images/ImageAsset";
// import UserComment from "../Products/UserComment";

@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })
export default class User {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column("text")
  username: string;

  @Column("text")
  password: string;

  @Column("text")
  first_name: string;

  @Column("text")
  last_name: string;

  @Column("text")
  email: string;

  @OneToOne((type) => Avatar, (avatar) => avatar.user, { nullable: true })
  @JoinColumn()
  avatar?: Avatar;

  // @Column({ default: null, nullable: true })
  // @OneToMany((type) => ImageAsset, (imageAsset) => imageAsset.uploader, {
  //   cascade: true,
  //   onDelete: "CASCADE",
  // })
  // imageAssets?: ImageAsset[];

  @ManyToOne((type) => Role, (role) => role.users, {
    nullable: true,
  })
  role?: Role;

  // @OneToMany((type) => UserComment, (userComent) => userComent.author)
  // published_comments?: UserComment[];
}
