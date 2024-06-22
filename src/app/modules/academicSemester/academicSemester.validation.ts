import { z } from 'zod';
import {
  AcademecSemesterCode,
  AcademecSemesterName,
  Months,
} from './academicSemester.constant';

const createAcademicSemesterValidationSchema = z.object({
  body: z.object({
    name: z.enum([...AcademecSemesterName] as [string, ...string[]]),
    year: z.string(),
    code: z.enum([...AcademecSemesterCode] as [string, ...string[]]),
    startMonth: z.enum([...Months] as [string, ...string[]]),
    endMonth: z.enum([...Months] as [string, ...string[]]),
  }),
});

export const academicSemesterValidation = {
  createAcademicSemesterValidationSchema,
};
