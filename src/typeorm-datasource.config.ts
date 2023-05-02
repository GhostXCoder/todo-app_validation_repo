import { DataSource } from "typeorm";
import "dotenv/config";
import { join } from "path";

export const typeOrmDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
  synchronize: false,
  entities: ["dist/**/*.entity{.ts,.js}"],
});

typeOrmDataSource.initialize();
