import {connect} from "mongoose";
import { MONGO_URI } from "../config/index";

// "Singleton" MongoConnection
export class MongoConnection {
  private static connected = false;
  
  private constructor () {}
  
  public static async connect(): Promise<boolean> {
    if (!MongoConnection.connected) {
      try {
        await connect(MONGO_URI);
        MongoConnection.connected = true;
        return true;
      } catch (err) {
        return false;
      }
    }
    return false;
  }
}