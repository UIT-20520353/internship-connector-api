import { DataSource } from "typeorm";
import { config } from "dotenv";

// Load environment variables
config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.POSTGRES_HOST || "localhost",
  port: parseInt(process.env.POSTGRES_PORT || "5432"),
  username: process.env.POSTGRES_USER || "postgres",
  password: process.env.POSTGRES_PASSWORD || "postgres",
  database: process.env.POSTGRES_DB || "internship_connector",
  ssl: {
    rejectUnauthorized: false, // Important for cloud PostgreSQL services
  },
  synchronize: process.env.NODE_ENV === "development", // Set to false in production
  logging: process.env.NODE_ENV === "development",
  entities: [],
  migrations: [],
  subscribers: [],
});
