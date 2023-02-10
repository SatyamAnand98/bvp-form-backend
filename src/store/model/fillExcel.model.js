"use strict";
exports.__esModule = true;
exports.fillExcelModel = void 0;
var mongoose_1 = require("mongoose");
var schema = new mongoose_1.Schema({}, { strict: false, timestamps: true });
exports.fillExcelModel = (0, mongoose_1.model)('studentInfo', schema);
