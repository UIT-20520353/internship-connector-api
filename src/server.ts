import "reflect-metadata"; // Required for TypeORM
import { AppDataSource } from "./data-source";
import app from "./app";

const PORT = process.env.PORT || 3000;

// Initialize database connection and start the server
AppDataSource.initialize()
  .then(() => {
    console.log("Database connection established");

    // Start the server
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
      console.log(`Health check available at: http://localhost:${PORT}/health`);
    });
  })
  .catch((error) => {
    console.error("Error during database initialization:", error);
  });
