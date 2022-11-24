"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrainerRepository = void 0;
const trainer_1 = require("../daos/trainer");
class TrainerRepository {
    constructor() {
        this.dao = trainer_1.TrainerDAOFactory.getDAO();
    }
    getAll() {
        var _a;
        return (_a = this.dao) === null || _a === void 0 ? void 0 : _a.getAll();
    }
    getById(id) {
        var _a;
        return (_a = this.dao) === null || _a === void 0 ? void 0 : _a.getById(id);
    }
    update(id, object) {
        var _a;
        return (_a = this.dao) === null || _a === void 0 ? void 0 : _a.update(id, object);
    }
    save(object) {
        var _a;
        return (_a = this.dao) === null || _a === void 0 ? void 0 : _a.save(object);
    }
    delete(id) {
        var _a;
        return (_a = this.dao) === null || _a === void 0 ? void 0 : _a.delete(id);
    }
}
exports.TrainerRepository = TrainerRepository;
