import { DB_TYPE } from "../../../config";
import { TrainerDAOMongo } from "./trainer.dao.mongo";

export class TrainerDAOFactory {
  static getDAO() {
    switch(DB_TYPE) {
      case "MONGO":
        return new TrainerDAOMongo();
      case "MYSQL":
        // TO-DO: Implement TrainerDAOMYSQL
        return null;
      default:
        return null;
    }
  }
}