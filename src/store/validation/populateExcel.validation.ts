import * as Joi from "joi";
import { EBPL, EClass, EClothSet, EDisability, EDisadvantageGroup, EFacilities, EFreeBicycle, EFreeBooks, EFreeEducation, EFreeEscort, EFreeHostel, EFreeTransport, EGender, EHomeless, ELanguage, ENewAdmission, EPreviousToClass1, EReligion, ESocialCategory, ESpecialTraining } from "../enum/populateExcel.enum";

export const getStudentDetailValidator = Joi.object({
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
    previousClass: Joi.string().valid(...Object.values(EClass)).required(),
    currentClass: Joi.string().valid(...Object.values(EClass)).required(),
    gender: Joi.string().valid(...Object.values(EGender)).required(),
    socialCategory: Joi.string().valid(...Object.values(ESocialCategory)).required(),
    motherTongue: Joi.string().valid(...Object.values(ELanguage)).required(),
    class1Previous: Joi.string().valid(...Object.values(EPreviousToClass1)).default(EPreviousToClass1.ANOTHER),
    disabilityType: Joi.string().valid(...Object.values(EDisability)).required(),
    
    newAdmission: Joi.string().valid(...Object.values(ENewAdmission)).required(),
    bpl: Joi.string().valid(...Object.values(EBPL)).required(),
    disadvantagedGroup: Joi.string().valid(...Object.values(EDisadvantageGroup)).required(),
    religion: Joi.string().valid(...Object.values(EReligion)).required(),

    admissionNumber: Joi.string(),
    attendance: Joi.number()
        .integer(),
    facilityReceived: Joi.string().valid(...Object.values(EFacilities)).default(EFacilities.NA),
    freeBooks: Joi.string().valid(...Object.values(EFreeBooks)).default(EFreeBooks.NA),
    freeHostel: Joi.string().valid(...Object.values(EFreeHostel)).default(EFreeHostel.NA),
    freeEducation: Joi.string().valid(...Object.values(EFreeEducation)).default(EFreeEducation.NA),
    freeTransport: Joi.string().valid(...Object.values(EFreeTransport)).default(EFreeTransport.NA),
    freeEscort: Joi.string().valid(...Object.values(EFreeEscort)).default(EFreeEscort.NA),
    freeBicycle: Joi.string().valid(...Object.values(EFreeBicycle)).default(EFreeBicycle.NA),
    childTraining: Joi.string().valid(...Object.values(ESpecialTraining)).default(ESpecialTraining.NA),
    homeless: Joi.string().valid(...Object.values(EHomeless)).default(EHomeless.NA),
    uniformSet: Joi.string().valid(...Object.values(EClothSet)).default(EClothSet.NA),
    locality: Joi.string().default("Deoghar"),
    udiceCode: Joi.string().default("20140124408"),
    schoolName: Joi.string().default("Bharti Vidyapeeth"),
    section: Joi.string().default("A"),
    medium: Joi.string().default("English"),
    academicYear: Joi.string().default("2022-23"),
}).unknown(false);