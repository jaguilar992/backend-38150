import mongoose from "mongoose";
import { MONGO_URI } from "../../config";

// Aplicando el patron Singleton
// Necesitamos que la conexión a la base de datos solo se haga una vez
export class MongoConnection {
  private static instance: MongoConnection;
  private static connected: boolean = false;

  private constructor() {}

  public static async getInstance() {
    if (!MongoConnection.connected) {
      try {
        await mongoose.connect(MONGO_URI || "");
        MongoConnection.connected = true;
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    }
    return MongoConnection.instance;
  }
}

export default MongoConnection.getInstance;