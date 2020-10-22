import {MigrationInterface, QueryRunner} from "typeorm";

export class dateFieldForCustomerAddress1603402531012 implements MigrationInterface {
    name = 'dateFieldForCustomerAddress1603402531012'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "address" DROP COLUMN "date_assigned_to_customer"`);
        await queryRunner.query(`ALTER TABLE "address" ADD "date_assigned_to_customer" date`);
        await queryRunner.query(`ALTER TABLE "role" ALTER COLUMN "description" SET DEFAULT null`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "role" ALTER COLUMN "description" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "address" DROP COLUMN "date_assigned_to_customer"`);
        await queryRunner.query(`ALTER TABLE "address" ADD "date_assigned_to_customer" TIMESTAMP`);
    }

}
