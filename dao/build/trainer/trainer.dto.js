"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrainerModel = void 0;
const mongoose_1 = require("mongoose");
exports.TrainerModel = (0, mongoose_1.model)('Trainer', new mongoose_1.Schema({
    name: { type: 'String' },
    edad: { type: 'Number' },
    ciudad: { type: 'String' }
}));
