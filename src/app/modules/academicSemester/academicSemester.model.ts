import { Schema, model } from 'mongoose';
import { TAcademicSemester } from './academicSemester.interface';
import {
  AcademecSemesterCode,
  AcademecSemesterName,
  Months,
} from './academicSemester.constant';

const academecSemesterSchema = new Schema<TAcademicSemester>(
  {
    name: {
      type: String,
      required: true,
      enum: AcademecSemesterName,
    },
    year: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
      enum: AcademecSemesterCode,
    },
    startMonth: {
      type: String,
      enum: Months,
      required: true,
    },
    endMonth: {
      type: String,
      required: true,
      enum: Months,
    },
  },
  {
    timestamps: true,
  },
);

academecSemesterSchema.pre('save', async function (next) {
  const isSemesterExists = await AcademecSemester.findOne({
    name: this.name,
    year: this.year,
    code: this.code,
    startMonth: this.startMonth,
    endMonth: this.endMonth,
  });

  if (isSemesterExists) {
    throw new Error('Semester already exists !');
  }
  next();
});

export const AcademecSemester = model<TAcademicSemester>(
  'AcademicSemester',
  academecSemesterSchema,
);
