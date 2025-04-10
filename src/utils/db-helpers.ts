import { AppDataSource } from "../data-source";

/**
 * Checks if the database connection is established
 * @returns {Promise<boolean>} True if connected, false otherwise
 */
export const isDatabaseConnected = async (): Promise<boolean> => {
  try {
    if (AppDataSource.isInitialized) {
      await AppDataSource.query("SELECT 1");
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
};

/**
 * Attempts to reconnect to the database
 * @returns {Promise<boolean>} True if reconnection successful, false otherwise
 */
export const reconnectDatabase = async (): Promise<boolean> => {
  try {
    if (!AppDataSource.isInitialized) {
      await AppDataSource.initialize();
      return true;
    }
    return true;
  } catch (error) {
    console.error("Failed to reconnect to database:", error);
    return false;
  }
};
