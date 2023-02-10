import { fillExcelModel } from "../../store/model/fillExcel.model";
import * as fs from "fs";

export async function saveToDB(data){
    const studentData = new fillExcelModel(data);
    await studentData.save();
}

export async function saveToExcel(studentInfo){
    try{
        var data = ''
        data=data+studentInfo.aadharNumber+'\t'+studentInfo.name+'\t'+studentInfo.fatherName+'\t'+studentInfo.motherName+'\t'+studentInfo.dob+'\t'+studentInfo.gender+'\t'+studentInfo.socialCategory+'\t'+studentInfo.religion+'\t'+studentInfo.motherTongue+'\t'+studentInfo.locality+'\t'+studentInfo.bpl+'\t'+studentInfo.disadvantagedGroup+'\t'+studentInfo.academicYear+'\t'+studentInfo.udiceCode+'\t'+studentInfo.schoolName+'\t'+studentInfo.freeEducation+'\t'+studentInfo.currentClass+'\t'+studentInfo.section+'\t'+studentInfo.admissionNumber+'\t'+studentInfo.medium+'\t'+studentInfo.dateOfAdmission+'\t'+studentInfo.newAdmission+'\t'+studentInfo.previousClass+'\t'+studentInfo.class1Previous+'\t'+studentInfo.attendance+'\t'+studentInfo.previousPercentage+'\t'+studentInfo.uniformSet+'\t'+studentInfo.disabilityType+'\t'+studentInfo.facilityReceived+'\t'+studentInfo.freeBooks+'\t'+studentInfo.freeTransport+'\t'+studentInfo.freeEscort+'\t'+studentInfo.freeBicycle+'\t'+studentInfo.freeHostel+'\t'+studentInfo.childTraining+'\t'+studentInfo.homeless+'\t'+studentInfo.bankAccNo+'\t'+studentInfo.IFSC+'\t'+studentInfo.mobile+'\t'+studentInfo.email+'\n';
        fs.appendFile('student.xls', data, (err) => {
            if (err) throw err;
            console.log('File created');
        });
    }catch(error){
        console.log(error.message)
    }
}