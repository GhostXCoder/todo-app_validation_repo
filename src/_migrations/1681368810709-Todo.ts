import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class Todo1681368810709 implements MigrationInterface {
  
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "todo",
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
                    name: "Task",
                    type: "varchar",
                  },
                {
                  name: "Description",
                  type: "varchar",
                },
                {
                  name: "Due_Date",
                  type: "varchar",
                },
                {
                    name: "Priority",
                    type: "varchar",
                  },
                  {
                    name: "Remarks",
                    type: "varchar",
                  },
                  {
                    name: "Status",
                    type: "varchar",
                  },
               
                  {
                    name: "Notes",
                    type: "varchar",
                  },
                  {
                    name: "Assignee",
                    type: "varchar",
                  },
                  {
                    name: "Tags",
                    type: "varchar",
                  },
                  {
                    name: "Checklist",
                    type: "varchar",
                  },
                  {
                    name: "Time_estimation",
                    type: "varchar",
                  },
                  {
                    name: "title",
                    type: "varchar",
                  },
                  {
                    name: "completed",
                    type: "boolean",
                  },
              ],
            }),
          );

    }

       public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE if exists todo cascade`);
    }

}
