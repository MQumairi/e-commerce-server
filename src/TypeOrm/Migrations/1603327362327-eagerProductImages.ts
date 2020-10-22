import {MigrationInterface, QueryRunner} from "typeorm";

export class eagerProductImages1603327362327 implements MigrationInterface {
    name = 'eagerProductImages1603327362327'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "role" ALTER COLUMN "description" SET DEFAULT null`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "role" ALTER COLUMN "description" DROP DEFAULT`);
    }

}
