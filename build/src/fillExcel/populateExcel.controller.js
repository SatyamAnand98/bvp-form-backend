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
exports.populateExcel = void 0;
const populateExcel_validation_1 = require("../store/validation/populateExcel.validation");
const populateExcel_helper_1 = require("./helper/populateExcel.helper");
var fs = require('fs');
var util = require('util');
var log_file = fs.createWriteStream(__dirname + '/debug.log', { flags: 'w' });
var log_stdout = process.stdout;
console.log = function (d) {
    log_file.write(util.format(d) + '\n');
    log_stdout.write(util.format(d) + '\n');
};
function populateExcel(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log(req.body);
            const studentInfo = yield populateExcel_validation_1.getStudentDetailValidator.validateAsync(req.body);
            yield (0, populateExcel_helper_1.saveToDB)(studentInfo);
            yield (0, populateExcel_helper_1.saveToExcel)(studentInfo);
            return res.status(200).json(studentInfo);
        }
        catch (error) {
            console.log(`error: ${error.message}`);
            return res.status(500).json({ error: error.message });
        }
    });
}
exports.populateExcel = populateExcel;
