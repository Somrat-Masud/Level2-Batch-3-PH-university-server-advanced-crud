// import { UserServices } from './user.service';
import sendResponse from '../../utilis/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../utilis/catchAsync';
import { AcedemicSemesterServices } from './academicSemester.service';

const createAcademicSemester = catchAsync(async (req, res) => {
  const result = await AcedemicSemesterServices.createAcademicSemesterIntoBd(
    req.body,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Semester  is created succesfully',
    data: result,
  });
});

export const AcademicSemesterControllers = {
  createAcademicSemester,
};
