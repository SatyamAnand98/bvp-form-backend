"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fillExcelModel = void 0;
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({}, { strict: false, timestamps: true });
exports.fillExcelModel = (0, mongoose_1.model)('studentInfo', schema);
