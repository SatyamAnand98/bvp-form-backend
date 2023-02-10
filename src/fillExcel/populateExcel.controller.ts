import { Request, Response } from 'express';
import { getStudentDetailValidator } from '../store/validation/populateExcel.validation';
import { saveToDB, saveToExcel } from './helper/populateExcel.helper';

var fs = require('fs');
var util = require('util');
var log_file = fs.createWriteStream(__dirname + '/debug.log', {flags : 'w'});
var log_stdout = process.stdout;

console.log = function(d) { //
  log_file.write(util.format(d) + '\n');
  log_stdout.write(util.format(d) + '\n');
};

export async function populateExcel(req: Request, res: Response){
    try{
        console.log(req.body)
        const studentInfo = await getStudentDetailValidator.validateAsync(req.body);
        await saveToDB(studentInfo);
        await saveToExcel(studentInfo);
        return res.status(200).json(studentInfo)
    }
    catch(error){
        console.log(`error: ${error.message}`)
        return res.status(500).json({error: error.message});
    }
}