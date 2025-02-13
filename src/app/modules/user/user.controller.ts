import { UserServices } from './user.service';
import sendResponse from '../../utilis/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../utilis/catchAsync';

const createStudent = catchAsync(async (req, res) => {
  const { password, student: studentData } = req.body;
  // const zodParsedData = studentValidationSchema.parse(studentData);
  const result = await UserServices.createStudentIntoDB(password, studentData);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student is created succesfully',
    data: result,
  });
});

export const UserControllers = {
  createStudent,
};
