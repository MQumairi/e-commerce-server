import {MigrationInterface, QueryRunner} from "typeorm";

export class cascadeProductImages1603329714317 implements MigrationInterface {
    name = 'cascadeProductImages1603329714317'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "image_asset" DROP CONSTRAINT "FK_cb650c0c0829b793de422eef0cb"`);
        await queryRunner.query(`ALTER TABLE "role" ALTER COLUMN "description" SET DEFAULT null`);
        await queryRunner.query(`ALTER TABLE "image_asset" ADD CONSTRAINT "FK_cb650c0c0829b793de422eef0cb" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "image_asset" DROP CONSTRAINT "FK_cb650c0c0829b793de422eef0cb"`);
        await queryRunner.query(`ALTER TABLE "role" ALTER COLUMN "description" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "image_asset" ADD CONSTRAINT "FK_cb650c0c0829b793de422eef0cb" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
