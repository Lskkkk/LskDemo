import xlsx from 'xlsx';
import path from 'path';

const filePath = path.join(__dirname, '../files/grade.xlsx');
const gradeFile = xlsx.readFile(filePath);

const totalSheet = xlsx.utils.sheet_to_json(gradeFile.Sheets[gradeFile.SheetNames[0]]);
const sheet = totalSheet.filter((line: any) => line.序号 !== '总计');

const totalGrade = sheet.reduce(((total, line: any) => total + line.分数), 0) as number;

const lineLength = sheet.length;
const averageGrade = totalGrade / lineLength;

sheet.push({
    序号: '总计',
    姓名: '',
    分数: averageGrade
});

gradeFile.Sheets[gradeFile.SheetNames[0]] = xlsx.utils.json_to_sheet(sheet);

xlsx.writeFile(gradeFile, path.join(__dirname, '../files/grade.xlsx'));