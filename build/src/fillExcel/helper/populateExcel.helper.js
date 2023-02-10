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
exports.saveToExcel = exports.saveToDB = void 0;
const fillExcel_model_1 = require("../../store/model/fillExcel.model");
const fs = require("fs");
function saveToDB(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const studentData = new fillExcel_model_1.fillExcelModel(data);
        yield studentData.save();
    });
}
exports.saveToDB = saveToDB;
function saveToExcel(studentInfo) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            var data = '';
            data = data + studentInfo.aadharNumber + '\t' + studentInfo.name + '\t' + studentInfo.fatherName + '\t' + studentInfo.motherName + '\t' + studentInfo.dob + '\t' + studentInfo.gender + '\t' + studentInfo.socialCategory + '\t' + studentInfo.religion + '\t' + studentInfo.motherTongue + '\t' + studentInfo.locality + '\t' + studentInfo.bpl + '\t' + studentInfo.disadvantagedGroup + '\t' + studentInfo.academicYear + '\t' + studentInfo.udiceCode + '\t' + studentInfo.schoolName + '\t' + studentInfo.freeEducation + '\t' + studentInfo.currentClass + '\t' + studentInfo.section + '\t' + studentInfo.admissionNumber + '\t' + studentInfo.medium + '\t' + studentInfo.dateOfAdmission + '\t' + studentInfo.newAdmission + '\t' + studentInfo.previousClass + '\t' + studentInfo.class1Previous + '\t' + studentInfo.attendance + '\t' + studentInfo.previousPercentage + '\t' + studentInfo.uniformSet + '\t' + studentInfo.disabilityType + '\t' + studentInfo.facilityReceived + '\t' + studentInfo.freeBooks + '\t' + studentInfo.freeTransport + '\t' + studentInfo.freeEscort + '\t' + studentInfo.freeBicycle + '\t' + studentInfo.freeHostel + '\t' + studentInfo.childTraining + '\t' + studentInfo.homeless + '\t' + studentInfo.bankAccNo + '\t' + studentInfo.IFSC + '\t' + studentInfo.mobile + '\t' + studentInfo.email + '\n';
            fs.appendFile('student.xls', data, (err) => {
                if (err)
                    throw err;
                console.log('File created');
            });
        }
        catch (error) {
            console.log(error.message);
        }
    });
}
exports.saveToExcel = saveToExcel;
