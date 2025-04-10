import express, { Application, Request, Response } from "express";
import { config } from "dotenv";
import { AppDataSource } from "./data-source";

// Load environment variables
config();

const app: Application = express();

// Basic middleware
app.use(express.json());

// Health check endpoint
app.get("/health", async (req: Request, res: Response) => {
  let dbStatus = "unknown";

  try {
    // Check database connection
    if (AppDataSource.isInitialized) {
      await AppDataSource.query("SELECT 1");
      dbStatus = "connected";
    } else {
      dbStatus = "disconnected";
    }
  } catch (error) {
    dbStatus = "error";
  }

  res.status(200).json({
    status: "ok",
    timestamp: new Date().toISOString(),
    service: "internship-connector-api",
    database: dbStatus,
  });
});

export default app;
