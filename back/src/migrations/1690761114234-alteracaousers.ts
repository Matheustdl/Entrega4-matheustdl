import { MigrationInterface, QueryRunner } from "typeorm";

export class Alteracaousers1690761114234 implements MigrationInterface {
    name = 'Alteracaousers1690761114234'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "deletedAt" date`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "deletedAt"`);
    }

}
