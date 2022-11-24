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
exports.TrainerDAOMongo = void 0;
const trainer_dto_1 = require("../../trainer.dto");
const mongoose_1 = require("mongoose");
const database_1 = require("../../../database");
class TrainerDAOMongo {
    constructor() {
        database_1.MongoConnection.connect();
        this.TrainerModel = trainer_dto_1.TrainerModel;
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield this.TrainerModel.find({});
            return users;
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.TrainerModel.findOne({ _id: new mongoose_1.Types.ObjectId(id) });
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.TrainerModel.deleteOne({ _id: new mongoose_1.Types.ObjectId(id) });
                return true;
            }
            catch (err) {
                return false;
            }
        });
    }
    save(object) {
        return __awaiter(this, void 0, void 0, function* () {
            const trainer = new this.TrainerModel(object);
            return yield trainer.save();
        });
    }
    update(id, object) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.TrainerModel.updateOne({ _id: new mongoose_1.Types.ObjectId(id) }, object);
            return object;
        });
    }
}
exports.TrainerDAOMongo = TrainerDAOMongo;
