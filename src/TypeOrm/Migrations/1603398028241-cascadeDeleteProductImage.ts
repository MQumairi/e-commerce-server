import {MigrationInterface, QueryRunner} from "typeorm";

export class cascadeDeleteProductImage1603398028241 implements MigrationInterface {
    name = 'cascadeDeleteProductImage1603398028241'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "image_asset" DROP CONSTRAINT "FK_cb650c0c0829b793de422eef0cb"`);
        await queryRunner.query(`ALTER TABLE "role" ALTER COLUMN "description" SET DEFAULT null`);
        await queryRunner.query(`ALTER TABLE "image_asset" ADD CONSTRAINT "FK_cb650c0c0829b793de422eef0cb" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "image_asset" DROP CONSTRAINT "FK_cb650c0c0829b793de422eef0cb"`);
        await queryRunner.query(`ALTER TABLE "role" ALTER COLUMN "description" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "image_asset" ADD CONSTRAINT "FK_cb650c0c0829b793de422eef0cb" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

}
