"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w;
exports.__esModule = true;
exports.getStudentDetailValidator = void 0;
var Joi = require("joi");
var populateExcel_enum_1 = require("../enum/populateExcel.enum");
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
    previousClass: (_a = Joi.string()).valid.apply(_a, Object.values(populateExcel_enum_1.EClass)).required(),
    currentClass: (_b = Joi.string()).valid.apply(_b, Object.values(populateExcel_enum_1.EClass)).required(),
    gender: (_c = Joi.string()).valid.apply(_c, Object.values(populateExcel_enum_1.EGender)).required(),
    socialCategory: (_d = Joi.string()).valid.apply(_d, Object.values(populateExcel_enum_1.ESocialCategory)).required(),
    motherTongue: (_e = Joi.string()).valid.apply(_e, Object.values(populateExcel_enum_1.ELanguage)).required(),
    class1Previous: (_f = Joi.string()).valid.apply(_f, Object.values(populateExcel_enum_1.EPreviousToClass1))["default"](populateExcel_enum_1.EPreviousToClass1.ANOTHER),
    disabilityType: (_g = Joi.string()).valid.apply(_g, Object.values(populateExcel_enum_1.EDisability)).required(),
    newAdmission: (_h = Joi.string()).valid.apply(_h, Object.values(populateExcel_enum_1.ENewAdmission)).required(),
    bpl: (_j = Joi.string()).valid.apply(_j, Object.values(populateExcel_enum_1.EBPL)).required(),
    disadvantagedGroup: (_k = Joi.string()).valid.apply(_k, Object.values(populateExcel_enum_1.EDisadvantageGroup)).required(),
    religion: (_l = Joi.string()).valid.apply(_l, Object.values(populateExcel_enum_1.EReligion)).required(),
    admissionNumber: Joi.string(),
    attendance: Joi.number()
        .integer(),
    facilityReceived: (_m = Joi.string()).valid.apply(_m, Object.values(populateExcel_enum_1.EFacilities))["default"](populateExcel_enum_1.EFacilities.NA),
    freeBooks: (_o = Joi.string()).valid.apply(_o, Object.values(populateExcel_enum_1.EFreeBooks))["default"](populateExcel_enum_1.EFreeBooks.NA),
    freeHostel: (_p = Joi.string()).valid.apply(_p, Object.values(populateExcel_enum_1.EFreeHostel))["default"](populateExcel_enum_1.EFreeHostel.NA),
    freeEducation: (_q = Joi.string()).valid.apply(_q, Object.values(populateExcel_enum_1.EFreeEducation))["default"](populateExcel_enum_1.EFreeEducation.NA),
    freeTransport: (_r = Joi.string()).valid.apply(_r, Object.values(populateExcel_enum_1.EFreeTransport))["default"](populateExcel_enum_1.EFreeTransport.NA),
    freeEscort: (_s = Joi.string()).valid.apply(_s, Object.values(populateExcel_enum_1.EFreeEscort))["default"](populateExcel_enum_1.EFreeEscort.NA),
    freeBicycle: (_t = Joi.string()).valid.apply(_t, Object.values(populateExcel_enum_1.EFreeBicycle))["default"](populateExcel_enum_1.EFreeBicycle.NA),
    childTraining: (_u = Joi.string()).valid.apply(_u, Object.values(populateExcel_enum_1.ESpecialTraining))["default"](populateExcel_enum_1.ESpecialTraining.NA),
    homeless: (_v = Joi.string()).valid.apply(_v, Object.values(populateExcel_enum_1.EHomeless))["default"](populateExcel_enum_1.EHomeless.NA),
    uniformSet: (_w = Joi.string()).valid.apply(_w, Object.values(populateExcel_enum_1.EClothSet))["default"](populateExcel_enum_1.EClothSet.NA),
    locality: Joi.string()["default"]("Deoghar"),
    udiceCode: Joi.string()["default"]("20140124408"),
    schoolName: Joi.string()["default"]("Bharti Vidyapeeth"),
    section: Joi.string()["default"]("A"),
    medium: Joi.string()["default"]("English"),
    academicYear: Joi.string()["default"]("2022-23")
}).unknown(false);
