import { DataSource } from "typeorm";
import "dotenv/config";

const configDB = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
  synchronize: false,
  entities: ["dist/**/*.entity{.js}"],
  migrationsTableName: "_migration",
  migrations: [__dirname + "/_migrations/**/*{.ts,.js}"],
});

export default configDB;
