import { DATABASE_TYPE } from "../../config"
import {DAOInterface} from "../dao.interface";
import { PokemonDAOMongoImpl } from "./pokemon.dao.mongo"
// import { pokemonDAOMYSQLImpl } from "../dao/trainer.dao.mongo";
// import { pokemonDAOFirebaseImpl } from "../dao/trainer.dao.mongo";

export class PokemonDAOFactory {
  private pokemonDAO;
  getDAO() {
    // retorna el DAO dependiendo de la conexion de base de datos a usar
    switch (DATABASE_TYPE) {
      case "MONGO":
        this.pokemonDAO = new PokemonDAOMongoImpl();
        break;
      case "MYSQL":
        // this.pokemonDAO = new pokemonDAOMYSQLImpl()
        break;
      case "FIREBASE":
        // this.pokemonDAO = new pokemonDAOFirebaseImpl()
        break;
    }
    return this.pokemonDAO;
  }
}
