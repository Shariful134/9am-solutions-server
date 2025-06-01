/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
import { Model } from 'mongoose';
import { USER_ROLE } from './auth.constant';

export type TUser = {
  _id?: any;
  username: string;
  password: string;
  shops: [string];
  role: 'admin' | 'user';
};

//create statick method for using  model
export interface UserModel extends Model<TUser> {
  isUserExistsByUserName(username: string): Promise<TUser>;
  isPasswordMatched(
    planTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean>;
}

export type TUserRole = keyof typeof USER_ROLE;

// ======================== For Login =============================
export type TUserLogin = {
  username: string;
  password: string;
  rememberMe: boolean;
};
