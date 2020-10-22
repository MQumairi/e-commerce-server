import {MigrationInterface, QueryRunner} from "typeorm";

export class addingPublicIDCol1603328774937 implements MigrationInterface {
    name = 'addingPublicIDCol1603328774937'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "image_asset" ADD "public_id" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "role" ALTER COLUMN "description" SET DEFAULT null`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "role" ALTER COLUMN "description" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "image_asset" DROP COLUMN "public_id"`);
    }

}
