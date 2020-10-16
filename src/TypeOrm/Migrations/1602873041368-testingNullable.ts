import {MigrationInterface, QueryRunner} from "typeorm";

export class testingNullable1602873041368 implements MigrationInterface {
    name = 'testingNullable1602873041368'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "role" ALTER COLUMN "description" SET DEFAULT null`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "role" ALTER COLUMN "description" DROP DEFAULT`);
    }

}
