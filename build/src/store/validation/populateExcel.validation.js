"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStudentDetailValidator = void 0;
const Joi = require("joi");
const populateExcel_enum_1 = require("../enum/populateExcel.enum");
exports.getStudentDetailValidator = Joi.object({
    aadharNumber: Joi.string()
        .length(12)
        .pattern(/^[0-9]+$/)
        .allow(null, ""),
    name: Joi.string()
        .required(),
    mobile: Joi.string()
        .length(10)
        .pattern(/^[0-9]+$/)
        .required(),
    fatherName: Joi.string()
        .required(),
    email: Joi.string()
        .email({ tlds: { allow: false } }),
    motherName: Joi.string()
        .required(),
    dob: Joi.string()
        .required(),
    dateOfAdmission: Joi.string()
        .required(),
    previousPercentage: Joi.number()
        .integer()
        .greater(0)
        .less(101)
        .required(),
    bankAccNo: Joi.string()
        .pattern(/^[0-9]+$/)
        .allow(null, ""),
    IFSC: Joi.string().optional().allow(null, ""),
    previousClass: Joi.string().valid(...Object.values(populateExcel_enum_1.EClass)).required(),
    currentClass: Joi.string().valid(...Object.values(populateExcel_enum_1.EClass)).required(),
    gender: Joi.string().valid(...Object.values(populateExcel_enum_1.EGender)).required(),
    socialCategory: Joi.string().valid(...Object.values(populateExcel_enum_1.ESocialCategory)).required(),
    motherTongue: Joi.string().valid(...Object.values(populateExcel_enum_1.ELanguage)).required(),
    class1Previous: Joi.string().valid(...Object.values(populateExcel_enum_1.EPreviousToClass1)).default(populateExcel_enum_1.EPreviousToClass1.ANOTHER),
    disabilityType: Joi.string().valid(...Object.values(populateExcel_enum_1.EDisability)).required(),
    newAdmission: Joi.string().valid(...Object.values(populateExcel_enum_1.ENewAdmission)).required(),
    bpl: Joi.string().valid(...Object.values(populateExcel_enum_1.EBPL)).required(),
    disadvantagedGroup: Joi.string().valid(...Object.values(populateExcel_enum_1.EDisadvantageGroup)).required(),
    religion: Joi.string().valid(...Object.values(populateExcel_enum_1.EReligion)).required(),
    admissionNumber: Joi.string(),
    attendance: Joi.number()
        .integer(),
    facilityReceived: Joi.string().valid(...Object.values(populateExcel_enum_1.EFacilities)).default(populateExcel_enum_1.EFacilities.NA),
    freeBooks: Joi.string().valid(...Object.values(populateExcel_enum_1.EFreeBooks)).default(populateExcel_enum_1.EFreeBooks.NA),
    freeHostel: Joi.string().valid(...Object.values(populateExcel_enum_1.EFreeHostel)).default(populateExcel_enum_1.EFreeHostel.NA),
    freeEducation: Joi.string().valid(...Object.values(populateExcel_enum_1.EFreeEducation)).default(populateExcel_enum_1.EFreeEducation.NA),
    freeTransport: Joi.string().valid(...Object.values(populateExcel_enum_1.EFreeTransport)).default(populateExcel_enum_1.EFreeTransport.NA),
    freeEscort: Joi.string().valid(...Object.values(populateExcel_enum_1.EFreeEscort)).default(populateExcel_enum_1.EFreeEscort.NA),
    freeBicycle: Joi.string().valid(...Object.values(populateExcel_enum_1.EFreeBicycle)).default(populateExcel_enum_1.EFreeBicycle.NA),
    childTraining: Joi.string().valid(...Object.values(populateExcel_enum_1.ESpecialTraining)).default(populateExcel_enum_1.ESpecialTraining.NA),
    homeless: Joi.string().valid(...Object.values(populateExcel_enum_1.EHomeless)).default(populateExcel_enum_1.EHomeless.NA),
    uniformSet: Joi.string().valid(...Object.values(populateExcel_enum_1.EClothSet)).default(populateExcel_enum_1.EClothSet.NA),
    locality: Joi.string().default("Deoghar"),
    udiceCode: Joi.string().default("20140124408"),
    schoolName: Joi.string().default("Bharti Vidyapeeth"),
    section: Joi.string().default("A"),
    medium: Joi.string().default("English"),
    academicYear: Joi.string().default("2022-23"),
}).unknown(false);
