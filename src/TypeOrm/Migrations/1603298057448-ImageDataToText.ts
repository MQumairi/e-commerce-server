import {MigrationInterface, QueryRunner} from "typeorm";

export class ImageDataToText1603298057448 implements MigrationInterface {
    name = 'ImageDataToText1603298057448'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "image_asset" DROP COLUMN "data"`);
        await queryRunner.query(`ALTER TABLE "image_asset" ADD "data" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "role" ALTER COLUMN "description" SET DEFAULT null`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "role" ALTER COLUMN "description" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "image_asset" DROP COLUMN "data"`);
        await queryRunner.query(`ALTER TABLE "image_asset" ADD "data" bytea NOT NULL`);
    }

}
