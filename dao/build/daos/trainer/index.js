"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrainerDAOFactory = void 0;
const config_1 = require("../../config");
const trainer_dao_mongo_1 = require("./trainer.dao.mongo");
class TrainerDAOFactory {
    static getDAO() {
        switch (config_1.DB_TYPE) {
            case "MONGO":
                return new trainer_dao_mongo_1.TrainerDAOMongo();
            case "MYSQL":
                // TO-DO: Implement TrainerDAOMYSQL
                return null;
            default:
                return null;
        }
    }
}
exports.TrainerDAOFactory = TrainerDAOFactory;
