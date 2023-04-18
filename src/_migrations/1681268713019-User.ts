import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class User1681268713019 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "user_signup",
              columns: [
                {
                  name: "id",
                  type: "int",
                  isGenerated: true,
                  isPrimary: true,
                },
                {
                  name: "userId",
                  type: "varchar",
                },
                {
                    name: "email",
                    type: "varchar",
                  },
                {
                  name: "username",
                  type: "varchar",
                },
                {
                  name: "password",
                  type: "varchar",
                },
               
              ],
            }),
          );

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`DROP TABLE if exists "user_signup"`);
    }
  
  }
    


