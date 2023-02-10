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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.saveToExcel = exports.saveToDB = void 0;
var fillExcel_model_1 = require("../../store/model/fillExcel.model");
var fs = require("fs");
function saveToDB(data) {
    return __awaiter(this, void 0, void 0, function () {
        var studentData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    studentData = new fillExcel_model_1.fillExcelModel(data);
                    return [4 /*yield*/, studentData.save()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.saveToDB = saveToDB;
function saveToExcel(studentInfo) {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            try {
                data = '';
                data = data + studentInfo.aadharNumber + '\t' + studentInfo.name + '\t' + studentInfo.fatherName + '\t' + studentInfo.motherName + '\t' + studentInfo.dob + '\t' + studentInfo.gender + '\t' + studentInfo.socialCategory + '\t' + studentInfo.religion + '\t' + studentInfo.motherTongue + '\t' + studentInfo.locality + '\t' + studentInfo.bpl + '\t' + studentInfo.disadvantagedGroup + '\t' + studentInfo.academicYear + '\t' + studentInfo.udiceCode + '\t' + studentInfo.schoolName + '\t' + studentInfo.freeEducation + '\t' + studentInfo.currentClass + '\t' + studentInfo.section + '\t' + studentInfo.admissionNumber + '\t' + studentInfo.medium + '\t' + studentInfo.dateOfAdmission + '\t' + studentInfo.newAdmission + '\t' + studentInfo.previousClass + '\t' + studentInfo.class1Previous + '\t' + studentInfo.attendance + '\t' + studentInfo.previousPercentage + '\t' + studentInfo.uniformSet + '\t' + studentInfo.disabilityType + '\t' + studentInfo.facilityReceived + '\t' + studentInfo.freeBooks + '\t' + studentInfo.freeTransport + '\t' + studentInfo.freeEscort + '\t' + studentInfo.freeBicycle + '\t' + studentInfo.freeHostel + '\t' + studentInfo.childTraining + '\t' + studentInfo.homeless + '\t' + studentInfo.bankAccNo + '\t' + studentInfo.IFSC + '\t' + studentInfo.mobile + '\t' + studentInfo.email + '\n';
                fs.appendFile('student.xls', data, function (err) {
                    if (err)
                        throw err;
                    console.log('File created');
                });
            }
            catch (error) {
                console.log(error.message);
            }
            return [2 /*return*/];
        });
    });
}
exports.saveToExcel = saveToExcel;
