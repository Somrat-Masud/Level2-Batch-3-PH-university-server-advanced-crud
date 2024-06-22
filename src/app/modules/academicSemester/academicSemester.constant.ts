import {
  TAcademecSemesterNameCodeMapper,
  TAcademicSemesterCode,
  TAcademicSemesterName,
  TMonths,
} from './academicSemester.interface';

export const Months: TMonths[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const AcademecSemesterName: TAcademicSemesterName[] = [
  'Autumn',
  'summer',
  'Fail',
];

export const AcademecSemesterCode: TAcademicSemesterCode[] = ['01', '02', '03'];
export const academecSemesterNameCodeMapper: TAcademecSemesterNameCodeMapper = {
  Autumn: '01',
  summer: '02',
  Fail: '03',
};
