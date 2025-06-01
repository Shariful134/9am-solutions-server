// /* eslint-disable @typescript-eslint/no-explicit-any */
// /* eslint-disable no-unused-vars */
// import { Model } from 'mongoose';
// import { USER_ROLE } from './user.constant';

// export type TUser = {
//   _id?: any;
//   name: string;
//   email: string;
//   password: string;
//   role: 'admin' | 'user';
//   isBlocked: boolean;
// };

// //create statick method for using  model
// export interface UserModel extends Model<TUser> {
//   isUserExistsByEmail(email: string): Promise<TUser>;
//   isPasswordMatched(
//     planTextPassword: string,
//     hashedPassword: string,
//   ): Promise<boolean>;
// }

// export type TUserRole = keyof typeof USER_ROLE;
