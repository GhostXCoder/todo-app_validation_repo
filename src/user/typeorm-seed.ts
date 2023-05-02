import { DataSource } from "typeorm";
import "dotenv/config";

const configDB = new DataSource({
  type: "postgres",
  host: process.env.localhost,
  username: process.env.postgres,
  password: process.env.password,
  database: process.env.quiz,
  synchronize: false,
  migrationsTableName: "_seed",
  entities: ["dist/**/*.entity{.js}"],
  migrations: [__dirname + "/_seeds/**/*{.ts,.js}"],
});

export default configDB;
