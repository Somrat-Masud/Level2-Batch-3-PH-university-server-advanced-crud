import { academecSemesterNameCodeMapper } from './academicSemester.constant';
import { TAcademicSemester } from './academicSemester.interface';
import { AcademecSemester } from './academicSemester.model';

const createAcademicSemesterIntoBd = async (payLoad: TAcademicSemester) => {
  //semester name--semester code

  //academecSemesterNameCodeMapper[Fall]
  if (academecSemesterNameCodeMapper[payLoad.name] !== payLoad.code) {
    throw new Error('Invalid Semester code');
  }

  const result = await AcademecSemester.create(payLoad);
  return result;
};
export const AcedemicSemesterServices = {
  createAcademicSemesterIntoBd,
};
