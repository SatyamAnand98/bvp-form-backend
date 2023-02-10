"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EClass = exports.EDisadvantageGroup = exports.EBPL = exports.ENewAdmission = exports.EFreeEducation = exports.EHomeless = exports.ESpecialTraining = exports.EFreeHostel = exports.EFreeBicycle = exports.EFreeEscort = exports.EFreeTransport = exports.EFreeBooks = exports.EFacilities = exports.EDisability = exports.EClothSet = exports.EPreviousToClass1 = exports.ELanguage = exports.EReligion = exports.ESocialCategory = exports.EGender = void 0;
var EGender;
(function (EGender) {
    EGender["MALE"] = "Male";
    EGender["FEMALE"] = "Female";
    EGender["THIRD"] = "Third Gender";
})(EGender = exports.EGender || (exports.EGender = {}));
var ESocialCategory;
(function (ESocialCategory) {
    ESocialCategory["UNRESERVED"] = "Unreserved";
    ESocialCategory["SC"] = "SC";
    ESocialCategory["ST"] = "ST";
    ESocialCategory["BC"] = "BC";
    ESocialCategory["MBC"] = "MBC";
})(ESocialCategory = exports.ESocialCategory || (exports.ESocialCategory = {}));
var EReligion;
(function (EReligion) {
    EReligion["HINDU"] = "Hindu";
    EReligion["ISLAM"] = "Islam";
    EReligion["CHRISTIAN"] = "Christian";
    EReligion["SIKH"] = "Sikh";
    EReligion["BUDDHIST"] = "Buddhist";
    EReligion["PARSI"] = "Parsi";
    EReligion["JAIN"] = "Jain";
    EReligion["OTHERS"] = "Others";
})(EReligion = exports.EReligion || (exports.EReligion = {}));
var ELanguage;
(function (ELanguage) {
    ELanguage["Assamese"] = "Assamese";
    ELanguage["Bengali"] = "Bengali";
    ELanguage["Gujarati"] = "Gujarati";
    ELanguage["Hindi"] = "Hindi";
    ELanguage["Kannada"] = "Kannada";
    ELanguage["Kashmiri"] = "Kashmiri";
    ELanguage["Konkani"] = "Konkani";
    ELanguage["Manipuri"] = "Manipuri";
    ELanguage["Marathi"] = "Marathi";
    ELanguage["Nepali"] = "Nepali";
    ELanguage["Odia"] = "Odia";
    ELanguage["Punjabi"] = "Punjabi";
    ELanguage["Sanskrit"] = "Sanskrit";
    ELanguage["Sindhi"] = "Sindhi";
    ELanguage["Tamil"] = "Tamil";
    ELanguage["Telugu"] = "Telugu";
    ELanguage["Urdu"] = "Urdu";
    ELanguage["English"] = "English";
    ELanguage["Bodo"] = "Bodo";
    ELanguage["Dogri"] = "Dogri";
    ELanguage["Khasi"] = "Khasi";
    ELanguage["Garo"] = "Garo";
    ELanguage["Mizo"] = "Mizo";
    ELanguage["Bhutia"] = "Bhutia";
    ELanguage["Lepcha"] = "Lepcha";
    ELanguage["Limboo"] = "Limboo";
    ELanguage["French"] = "French";
    ELanguage["Santhali"] = "Santhali";
    ELanguage["Maithali"] = "Maithali";
    ELanguage["Otherlanguages"] = "Other languages";
})(ELanguage = exports.ELanguage || (exports.ELanguage = {}));
var EPreviousToClass1;
(function (EPreviousToClass1) {
    EPreviousToClass1["ANOTHER"] = "Another School";
    EPreviousToClass1["ANGANWADI"] = "Anganwadi ECCE";
    EPreviousToClass1["NA"] = "NA";
})(EPreviousToClass1 = exports.EPreviousToClass1 || (exports.EPreviousToClass1 = {}));
var EClothSet;
(function (EClothSet) {
    EClothSet["NONE"] = "None";
    EClothSet["ONE"] = "One Set";
    EClothSet["TWO"] = "Two Set";
    EClothSet["NA"] = "NA";
})(EClothSet = exports.EClothSet || (exports.EClothSet = {}));
var EDisability;
(function (EDisability) {
    EDisability["NA"] = "NA";
    EDisability["BLINDNESS"] = "Blindness";
    EDisability["LOW_VISION"] = "Low-Vision";
    EDisability["HEARING"] = "Hearing Impairment(deaf and hard to hearing)";
    EDisability["SPEECH"] = "Speech and Language disablity";
    EDisability["LOCOMOTOR"] = "Locomotor Disability";
    EDisability["MENTAL"] = "Mental Illness";
    EDisability["LEARNING"] = "Specific Learning Disablities";
    EDisability["CEREBRAL"] = "Cerebral Palsy";
    EDisability["AUTISM"] = "Autism Spectrum Disorder";
    EDisability["DEAF_BLINDNESS"] = "Multiple Disablities including deaf blindness";
    EDisability["LEPROSY"] = "Leprosy Cured persons";
    EDisability["DWARIFISM"] = "Dwarifism";
    EDisability["INTELLECTUAL"] = "Intellectual Disablity";
    EDisability["DYSTROPHY"] = "Muscular Dystrophy";
    EDisability["NUROLOGICAL"] = "Chronic Nurological conditions";
    EDisability["MULTIPLE"] = "Multiple Sclerosis";
    EDisability["THALASSEMIA"] = "Thalassemia";
    EDisability["HEMOPHILIA"] = "Hemophilia";
    EDisability["SICKLE_CELL"] = "Sickle Cell disease";
    EDisability["ACID_ATTACK"] = "Acid Attack Victim";
    EDisability["PARKINSON"] = "Parkinson's disease";
})(EDisability = exports.EDisability || (exports.EDisability = {}));
var EFacilities;
(function (EFacilities) {
    EFacilities["NA"] = "NA";
    EFacilities["BRAILLE_BOOKS"] = "Braille Books";
    EFacilities["BRAILLE_KIT"] = "Braille Kit";
    EFacilities["LOW_VISION_KIT"] = "Low Vision Kit";
    EFacilities["HEARING_AID"] = "Hearing aid";
    EFacilities["BRACES"] = "Braces";
    EFacilities["CRUTCHES"] = "Crutches";
    EFacilities["WHEEL_CHAIR"] = "Wheel Chair";
    EFacilities["TRICYCLE"] = "Tricycle";
    EFacilities["CALIPER"] = "Caliper";
    EFacilities["OTHERS"] = "Others";
})(EFacilities = exports.EFacilities || (exports.EFacilities = {}));
var EFreeBooks;
(function (EFreeBooks) {
    EFreeBooks["YES"] = "Yes";
    EFreeBooks["NO"] = "No";
    EFreeBooks["NA"] = "NA";
})(EFreeBooks = exports.EFreeBooks || (exports.EFreeBooks = {}));
var EFreeTransport;
(function (EFreeTransport) {
    EFreeTransport["YES"] = "Yes";
    EFreeTransport["NO"] = "No";
    EFreeTransport["NA"] = "NA";
})(EFreeTransport = exports.EFreeTransport || (exports.EFreeTransport = {}));
var EFreeEscort;
(function (EFreeEscort) {
    EFreeEscort["YES"] = "Yes";
    EFreeEscort["NO"] = "No";
    EFreeEscort["NA"] = "NA";
})(EFreeEscort = exports.EFreeEscort || (exports.EFreeEscort = {}));
var EFreeBicycle;
(function (EFreeBicycle) {
    EFreeBicycle["YES"] = "Yes";
    EFreeBicycle["NO"] = "No";
    EFreeBicycle["NA"] = "NA";
})(EFreeBicycle = exports.EFreeBicycle || (exports.EFreeBicycle = {}));
var EFreeHostel;
(function (EFreeHostel) {
    EFreeHostel["NA"] = "NA";
    EFreeHostel["KGBV"] = "KGBV";
    EFreeHostel["JBAV"] = "JBAV";
    EFreeHostel["OTHERS"] = "Others";
})(EFreeHostel = exports.EFreeHostel || (exports.EFreeHostel = {}));
var ESpecialTraining;
(function (ESpecialTraining) {
    ESpecialTraining["RESIDENTIAL"] = "Residential";
    ESpecialTraining["NON_RESIDENTIAL"] = "Non-Residential";
    ESpecialTraining["BOTH"] = "Both Residential And Non-Residential";
    ESpecialTraining["NA"] = "NA";
})(ESpecialTraining = exports.ESpecialTraining || (exports.ESpecialTraining = {}));
var EHomeless;
(function (EHomeless) {
    EHomeless["YES"] = "Yes";
    EHomeless["NO"] = "No";
    EHomeless["NA"] = "NA";
})(EHomeless = exports.EHomeless || (exports.EHomeless = {}));
var EFreeEducation;
(function (EFreeEducation) {
    EFreeEducation["YES"] = "Yes";
    EFreeEducation["NO"] = "No";
    EFreeEducation["NA"] = "NA";
})(EFreeEducation = exports.EFreeEducation || (exports.EFreeEducation = {}));
var ENewAdmission;
(function (ENewAdmission) {
    ENewAdmission["NEW"] = "New";
    ENewAdmission["SAME"] = "Same School";
})(ENewAdmission = exports.ENewAdmission || (exports.ENewAdmission = {}));
var EBPL;
(function (EBPL) {
    EBPL["YES"] = "Yes";
    EBPL["NO"] = "No";
})(EBPL = exports.EBPL || (exports.EBPL = {}));
var EDisadvantageGroup;
(function (EDisadvantageGroup) {
    EDisadvantageGroup["YES"] = "Yes";
    EDisadvantageGroup["NO"] = "No";
})(EDisadvantageGroup = exports.EDisadvantageGroup || (exports.EDisadvantageGroup = {}));
var EClass;
(function (EClass) {
    EClass["LKG"] = "Lkg";
    EClass["UKG"] = "Ukg";
    EClass["Class1"] = "Class 1";
    EClass["Class2"] = "Class 2";
    EClass["Class3"] = "Class 3";
    EClass["Class4"] = "Class 4";
    EClass["Class5"] = "Class 5";
    EClass["Class6"] = "Class 6";
    EClass["Class7"] = "Class 7";
    EClass["Class8"] = "Class 8";
    EClass["NA"] = "NA";
})(EClass = exports.EClass || (exports.EClass = {}));
