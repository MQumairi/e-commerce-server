import {MigrationInterface, QueryRunner} from "typeorm";

export class firstMigration1602870586827 implements MigrationInterface {
    name = 'firstMigration1602870586827'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "address" ("id" SERIAL NOT NULL, "line_1" text NOT NULL, "line_2" text NOT NULL, "city" text NOT NULL, "country" text NOT NULL, "postcode" text NOT NULL, "type" character varying NOT NULL, CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_4f54e3a35bede3a3739efe3ed8" ON "address" ("type") `);
        await queryRunner.query(`CREATE TABLE "role" ("id" SERIAL NOT NULL, "name" text NOT NULL, "description" text NOT NULL, CONSTRAINT "PK_b36bcfe02fc8de3c57a8b2391c2" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "role"`);
        await queryRunner.query(`DROP INDEX "IDX_4f54e3a35bede3a3739efe3ed8"`);
        await queryRunner.query(`DROP TABLE "address"`);
    }

}
