// import { StatusCodes } from 'http-status-codes';
// import AppError from '../../errors/AppError';
// import { TUser } from './user.interface';
// import { User } from './user.model';

// const registerUserIntoDB = async (payload: TUser) => {
//   const user = await User.isUserExistsByEmail(payload.email);

//   //checking user is exists
//   if (user) {
//     throw new AppError(StatusCodes.BAD_REQUEST, 'Email already registered!');
//   }

//   const result = await User.create(payload);

//   const { _id, name, email } = result;

//   return { _id: _id.toString(), name: name, email: email };
// };

// export const userServices = {
//   registerUserIntoDB,
// };
