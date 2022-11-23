import { DATABASE_TYPE } from "../config"
import { TrainerDAOMongoImpl } from "../dao/trainer.dao.mongo";
import {DAOInterface} from "../dao/trainer.dao.mongo";
// import { TrainerDAOMYSQLImpl } from "../dao/trainer.dao.mongo";
// import { TrainerDAOFirebaseImpl } from "../dao/trainer.dao.mongo";

export class TrainerFactory {
  private trainerDAO;
  getDAO() {
    // retorna el DAO dependiendo de la conexion de base de datos a usar
    switch (DATABASE_TYPE) {
      case "MONGO":
        this.trainerDAO = new TrainerDAOMongoImpl()
        break;
      case "MYSQL":
        // this.trainerDAO = new TrainerDAOMYSQLImpl()
        break;
      case "FIREBASE":
        // this.trainerDAO = new TrainerDAOFirebaseImpl()
        break;
    }
    return this.trainerDAO;
  }
}
