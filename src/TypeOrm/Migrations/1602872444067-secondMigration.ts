import {MigrationInterface, QueryRunner} from "typeorm";

export class secondMigration1602872444067 implements MigrationInterface {
    name = 'secondMigration1602872444067'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "image_asset" ("id" SERIAL NOT NULL, "data" bytea NOT NULL, "type" character varying NOT NULL, "productId" integer, CONSTRAINT "PK_ebb19157be1103b6ab97049321e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_7a4ed6f81204770dfcd5b04473" ON "image_asset" ("type") `);
        await queryRunner.query(`CREATE TABLE "order_to_product" ("id" SERIAL NOT NULL, "quantity" integer NOT NULL, "orderId" integer, "productsId" integer, CONSTRAINT "PK_eb70cc26d5787b1735fa4dda322" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_comment" ("id" SERIAL NOT NULL, "title" text NOT NULL, "description" text NOT NULL, "date_posted" TIMESTAMP NOT NULL, "authorId" integer, "productId" integer, "parentCommentId" integer, CONSTRAINT "PK_09bced71952353c5ae4e40f0f52" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "username" text NOT NULL, "password" text NOT NULL, "first_name" text NOT NULL, "last_name" text NOT NULL, "email" text NOT NULL, "phone" text, "card_no" text, "card_exp" TIMESTAMP, "card_cvc" text, "type" character varying NOT NULL, "avatarId" integer, "roleId" integer, "addressId" integer, CONSTRAINT "REL_58f5c71eaab331645112cf8cfa" UNIQUE ("avatarId"), CONSTRAINT "REL_217ba147c5de6c107f2fa7fa27" UNIQUE ("addressId"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_31ef2b4d30675d0c15056b7f6e" ON "user" ("type") `);
        await queryRunner.query(`CREATE TABLE "rating" ("id" SERIAL NOT NULL, "score" integer NOT NULL, "customerId" integer, "productId" integer, CONSTRAINT "PK_ecda8ad32645327e4765b43649e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "product" ("id" SERIAL NOT NULL, "name" text NOT NULL, "description" text NOT NULL, "price_gbp" integer NOT NULL, "stock" integer NOT NULL, "storedInId" integer, CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "order" ("id" SERIAL NOT NULL, "order_date" TIMESTAMP NOT NULL, "arrival_date" TIMESTAMP NOT NULL, "payment_gbp" integer NOT NULL, "is_shipped" boolean NOT NULL, "is_delivered" boolean NOT NULL, "tracking_number" text NOT NULL, "customerId" integer, "destinationId" integer, "originId" integer, CONSTRAINT "PK_1031171c13130102495201e3e20" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "address" ADD "owner" text`);
        await queryRunner.query(`ALTER TABLE "address" ADD "phone" text`);
        await queryRunner.query(`ALTER TABLE "address" ADD "date_assigned_to_customer" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "role" ALTER COLUMN "description" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "role" ALTER COLUMN "description" SET DEFAULT null`);
        await queryRunner.query(`ALTER TABLE "image_asset" ADD CONSTRAINT "FK_cb650c0c0829b793de422eef0cb" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order_to_product" ADD CONSTRAINT "FK_3e918511a5f968387c92e33d62c" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order_to_product" ADD CONSTRAINT "FK_11efbd6561106f7ff069a987d8c" FOREIGN KEY ("productsId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_comment" ADD CONSTRAINT "FK_19d0406f821caa3149825fe9693" FOREIGN KEY ("authorId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_comment" ADD CONSTRAINT "FK_e79a970abccb687faf54c3074cb" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_comment" ADD CONSTRAINT "FK_bed08e1b0ae3b0aa467794ceccd" FOREIGN KEY ("parentCommentId") REFERENCES "user_comment"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_58f5c71eaab331645112cf8cfa5" FOREIGN KEY ("avatarId") REFERENCES "image_asset"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_c28e52f758e7bbc53828db92194" FOREIGN KEY ("roleId") REFERENCES "role"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_217ba147c5de6c107f2fa7fa271" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "rating" ADD CONSTRAINT "FK_ab73fa66d0d302887f32e0faecb" FOREIGN KEY ("customerId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "rating" ADD CONSTRAINT "FK_1fdf6f092aa907177771948f6a1" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_bb788bfc4cc86b0ae31bf56f168" FOREIGN KEY ("storedInId") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order" ADD CONSTRAINT "FK_124456e637cca7a415897dce659" FOREIGN KEY ("customerId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order" ADD CONSTRAINT "FK_05d26e13d695a788abb2d01f705" FOREIGN KEY ("destinationId") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order" ADD CONSTRAINT "FK_af3a52ad39f8b54287ff4336ed6" FOREIGN KEY ("originId") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order" DROP CONSTRAINT "FK_af3a52ad39f8b54287ff4336ed6"`);
        await queryRunner.query(`ALTER TABLE "order" DROP CONSTRAINT "FK_05d26e13d695a788abb2d01f705"`);
        await queryRunner.query(`ALTER TABLE "order" DROP CONSTRAINT "FK_124456e637cca7a415897dce659"`);
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_bb788bfc4cc86b0ae31bf56f168"`);
        await queryRunner.query(`ALTER TABLE "rating" DROP CONSTRAINT "FK_1fdf6f092aa907177771948f6a1"`);
        await queryRunner.query(`ALTER TABLE "rating" DROP CONSTRAINT "FK_ab73fa66d0d302887f32e0faecb"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_217ba147c5de6c107f2fa7fa271"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_c28e52f758e7bbc53828db92194"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_58f5c71eaab331645112cf8cfa5"`);
        await queryRunner.query(`ALTER TABLE "user_comment" DROP CONSTRAINT "FK_bed08e1b0ae3b0aa467794ceccd"`);
        await queryRunner.query(`ALTER TABLE "user_comment" DROP CONSTRAINT "FK_e79a970abccb687faf54c3074cb"`);
        await queryRunner.query(`ALTER TABLE "user_comment" DROP CONSTRAINT "FK_19d0406f821caa3149825fe9693"`);
        await queryRunner.query(`ALTER TABLE "order_to_product" DROP CONSTRAINT "FK_11efbd6561106f7ff069a987d8c"`);
        await queryRunner.query(`ALTER TABLE "order_to_product" DROP CONSTRAINT "FK_3e918511a5f968387c92e33d62c"`);
        await queryRunner.query(`ALTER TABLE "image_asset" DROP CONSTRAINT "FK_cb650c0c0829b793de422eef0cb"`);
        await queryRunner.query(`ALTER TABLE "role" ALTER COLUMN "description" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "role" ALTER COLUMN "description" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "address" DROP COLUMN "date_assigned_to_customer"`);
        await queryRunner.query(`ALTER TABLE "address" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "address" DROP COLUMN "owner"`);
        await queryRunner.query(`DROP TABLE "order"`);
        await queryRunner.query(`DROP TABLE "product"`);
        await queryRunner.query(`DROP TABLE "rating"`);
        await queryRunner.query(`DROP INDEX "IDX_31ef2b4d30675d0c15056b7f6e"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "user_comment"`);
        await queryRunner.query(`DROP TABLE "order_to_product"`);
        await queryRunner.query(`DROP INDEX "IDX_7a4ed6f81204770dfcd5b04473"`);
        await queryRunner.query(`DROP TABLE "image_asset"`);
    }

}
