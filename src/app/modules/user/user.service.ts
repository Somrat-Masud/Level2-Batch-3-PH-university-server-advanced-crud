import { TStudent } from '../student/student.interface';
import { TUser } from './user.interface';
import { User } from './user.model';
import config from '../../config';
import { Student } from '../student/student.model';

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  //create a user objext
  const userData: Partial<TUser> = {};
  // if passsword is not given, use default password
  if (!password) {
    userData.password = password || (config.default_password as string);
  }
  //set stidemt role
  userData.role = 'student';

  //set manualy generat id
  userData.id = '203010001';

  //create a user
  const newUser = await User.create(userData);

  //create a student
  if (Object.keys(newUser).length) {
    //set id , _id as user
    studentData.id = newUser.id;
    studentData.user = newUser._id; //reference _id

    const newStudent = await Student.create(studentData);
    return newStudent;
  }
  return newUser;
};

export const UserServices = {
  createStudentIntoDB,
};
