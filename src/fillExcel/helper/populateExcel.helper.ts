import { fillExcelModel } from "../../store/model/fillExcel.model";

export async function saveToDB(data){
    const studentData = new fillExcelModel(data);
    await studentData.save();
}

export async function saveToExcel(data){}