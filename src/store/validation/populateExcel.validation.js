"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w;
exports.__esModule = true;
exports.getStudentDetailValidator = void 0;
var joi_1 = require("joi");
var populateExcel_enum_1 = require("../enum/populateExcel.enum");
exports.getStudentDetailValidator = joi_1["default"].object({
    aadharNumber: joi_1["default"].string()
        .length(12)
        .pattern(/^[0-9]+$/)
        .allow(null, ""),
    name: joi_1["default"].string()
        .required(),
    mobile: joi_1["default"].string()
        .length(10)
        .pattern(/^[0-9]+$/)
        .required(),
    fatherName: joi_1["default"].string()
        .required(),
    email: joi_1["default"].string()
        .email({ tlds: { allow: false } }),
    motherName: joi_1["default"].string()
        .required(),
    dob: joi_1["default"].string()
        .required(),
    dateOfAdmission: joi_1["default"].string()
        .required(),
    previousPercentage: joi_1["default"].number()
        .integer()
        .greater(0)
        .less(101)
        .required(),
    bankAccNo: joi_1["default"].string()
        .pattern(/^[0-9]+$/)
        .allow(null, ""),
    IFSC: joi_1["default"].string().optional().allow(null, ""),
    previousClass: (_a = joi_1["default"].string()).valid.apply(_a, Object.values(populateExcel_enum_1.EClass)).required(),
    currentClass: (_b = joi_1["default"].string()).valid.apply(_b, Object.values(populateExcel_enum_1.EClass)).required(),
    gender: (_c = joi_1["default"].string()).valid.apply(_c, Object.values(populateExcel_enum_1.EGender)).required(),
    socialCategory: (_d = joi_1["default"].string()).valid.apply(_d, Object.values(populateExcel_enum_1.ESocialCategory)).required(),
    motherTongue: (_e = joi_1["default"].string()).valid.apply(_e, Object.values(populateExcel_enum_1.ELanguage)).required(),
    class1Previous: (_f = joi_1["default"].string()).valid.apply(_f, Object.values(populateExcel_enum_1.EPreviousToClass1))["default"](populateExcel_enum_1.EPreviousToClass1.ANOTHER),
    disabilityType: (_g = joi_1["default"].string()).valid.apply(_g, Object.values(populateExcel_enum_1.EDisability)).required(),
    newAdmission: (_h = joi_1["default"].string()).valid.apply(_h, Object.values(populateExcel_enum_1.ENewAdmission)).required(),
    bpl: (_j = joi_1["default"].string()).valid.apply(_j, Object.values(populateExcel_enum_1.EBPL)).required(),
    disadvantagedGroup: (_k = joi_1["default"].string()).valid.apply(_k, Object.values(populateExcel_enum_1.EDisadvantageGroup)).required(),
    religion: (_l = joi_1["default"].string()).valid.apply(_l, Object.values(populateExcel_enum_1.EReligion)).required(),
    admissionNumber: joi_1["default"].string(),
    attendance: joi_1["default"].number()
        .integer(),
    facilityReceived: (_m = joi_1["default"].string()).valid.apply(_m, Object.values(populateExcel_enum_1.EFacilities))["default"](populateExcel_enum_1.EFacilities.NA),
    freeBooks: (_o = joi_1["default"].string()).valid.apply(_o, Object.values(populateExcel_enum_1.EFreeBooks))["default"](populateExcel_enum_1.EFreeBooks.NA),
    freeHostel: (_p = joi_1["default"].string()).valid.apply(_p, Object.values(populateExcel_enum_1.EFreeHostel))["default"](populateExcel_enum_1.EFreeHostel.NA),
    freeEducation: (_q = joi_1["default"].string()).valid.apply(_q, Object.values(populateExcel_enum_1.EFreeEducation))["default"](populateExcel_enum_1.EFreeEducation.NA),
    freeTransport: (_r = joi_1["default"].string()).valid.apply(_r, Object.values(populateExcel_enum_1.EFreeTransport))["default"](populateExcel_enum_1.EFreeTransport.NA),
    freeEscort: (_s = joi_1["default"].string()).valid.apply(_s, Object.values(populateExcel_enum_1.EFreeEscort))["default"](populateExcel_enum_1.EFreeEscort.NA),
    freeBicycle: (_t = joi_1["default"].string()).valid.apply(_t, Object.values(populateExcel_enum_1.EFreeBicycle))["default"](populateExcel_enum_1.EFreeBicycle.NA),
    childTraining: (_u = joi_1["default"].string()).valid.apply(_u, Object.values(populateExcel_enum_1.ESpecialTraining))["default"](populateExcel_enum_1.ESpecialTraining.NA),
    homeless: (_v = joi_1["default"].string()).valid.apply(_v, Object.values(populateExcel_enum_1.EHomeless))["default"](populateExcel_enum_1.EHomeless.NA),
    uniformSet: (_w = joi_1["default"].string()).valid.apply(_w, Object.values(populateExcel_enum_1.EClothSet))["default"](populateExcel_enum_1.EClothSet.NA),
    locality: joi_1["default"].string()["default"]("Deoghar"),
    udiceCode: joi_1["default"].string()["default"]("20140124408"),
    schoolName: joi_1["default"].string()["default"]("Bharti Vidyapeeth"),
    section: joi_1["default"].string()["default"]("A"),
    medium: joi_1["default"].string()["default"]("English"),
    academicYear: joi_1["default"].string()["default"]("2022-23")
}).unknown(false);
