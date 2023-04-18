import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class whitelist1681263114274 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await this.createWhitelistTable(queryRunner);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE if exists "user"`);
    }


    async createWhitelistTable(queryRunner: QueryRunner) {
        await queryRunner.createTable(
          new Table({
            name: "user",
            columns: [
              {
                name: "id",
                type: "int",
                isGenerated: true,
                isPrimary: true,
              },
            
              {
                name: "username",
                type: "varchar",
              },
              {
                name: "password",
                type: "varchar",
              },
              {
                name: "createDate",
                type: "timestamptz",
                default: "now()",
              },
                         
            ],
          }),
        );
      }

}