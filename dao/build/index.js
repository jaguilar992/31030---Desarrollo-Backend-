"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const trainer_repository_1 = require("./trainer/repository/trainer.repository");
const database_1 = require("./database");
(() => __awaiter(void 0, void 0, void 0, function* () {
    const connection = yield database_1.MongoConnection.connect();
    if (!connection) {
        process.exit(0);
    }
    const _trainer = {
        name: "Ash",
        ciudad: "Paleta",
        edad: 25,
    };
    const trainerRepository = new trainer_repository_1.TrainerRepository();
    // trainerRepository.save(_trainer)?.then(console.log);
    const trainers = yield trainerRepository.getAll();
    for (let t of trainers || []) {
        console.log(JSON.stringify(t));
    }
}))();
