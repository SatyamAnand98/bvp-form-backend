import { model, Schema } from "mongoose";

const schema = new Schema({}, { strict: false, timestamps: true });
export const fillExcelModel = model('studentInfo', schema);