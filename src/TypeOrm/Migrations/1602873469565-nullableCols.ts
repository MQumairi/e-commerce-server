import {MigrationInterface, QueryRunner} from "typeorm";

export class nullableCols1602873469565 implements MigrationInterface {
    name = 'nullableCols1602873469565'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "role" ALTER COLUMN "description" SET DEFAULT null`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "role" ALTER COLUMN "description" DROP DEFAULT`);
    }

}
