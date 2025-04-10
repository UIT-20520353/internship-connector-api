import express, { Application, Request, Response } from "express";
import { config } from "dotenv";

// Load environment variables
config();

const app: Application = express();

// Basic middleware
app.use(express.json());

// Health check endpoint
app.get("/health", (req: Request, res: Response) => {
  res.status(200).json({
    status: "ok",
    timestamp: new Date().toISOString(),
    service: "internship-connector-api",
  });
});

export default app;
