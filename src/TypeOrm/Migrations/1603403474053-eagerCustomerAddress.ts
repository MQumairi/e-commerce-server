import {MigrationInterface, QueryRunner} from "typeorm";

export class eagerCustomerAddress1603403474053 implements MigrationInterface {
    name = 'eagerCustomerAddress1603403474053'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "role" ALTER COLUMN "description" SET DEFAULT null`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "role" ALTER COLUMN "description" DROP DEFAULT`);
    }

}
