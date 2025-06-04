import { StatusCodes } from 'http-status-codes';
import AppError from '../../errors/AppError';

import { TUser, TUserLogin } from './auth.interface';
import jwt from 'jsonwebtoken';

import config from '../../config';
import { verifyToken } from './auth.utils';
import { User } from './auth.model';

// Register
const registerUserIntoDB = async (payload: TUser) => {
  const payloads = { ...payload, role: 'user' };
  // Check for globally unique shop names
  const existingShops = await User.find({
    shops: { $in: payloads.shops },
  });

  if (existingShops.length > 0) {
    const usedNames = existingShops
      .flatMap((user) => user.shops)
      .filter((shop) => payloads.shops.includes(shop));
    throw new AppError(
      StatusCodes.BAD_REQUEST,
      `The following shop names are already taken: ${usedNames.join(', ')}`,
    );
  }

  const result = await User.create(payloads);

  const { _id, username, shops } = result;

  return { _id: _id.toString(), name: username, shops };
};

//login User
const loginUserIntoDB = async (payload: TUserLogin) => {
  const user = await User.isUserExistsByUserName(payload.username);

  //checking user is exists
  if (!user) {
    throw new AppError(StatusCodes.NOT_FOUND, 'User not found');
  }

  if (!(await User.isPasswordMatched(payload?.password, user?.password))) {
    throw new AppError(StatusCodes.UNAUTHORIZED, 'Incorrect password');
  }

  const jwtPayload = {
    _id: user?._id,
    userName: user.username,
    role: user.role,
  };
  const { rememberMe } = payload;
  const accessToken = jwt.sign(jwtPayload, config.jwt_access_secret as string, {
    expiresIn: rememberMe ? '7d' : '30m',
  });

  return { accessToken, rememberMe };
};

//find user
const getUserIntoDB = async (id: string) => {
  const user = await User.findById(id);

  //checking user is exists
  if (!user) {
    throw new AppError(StatusCodes.NOT_FOUND, 'User not found');
  }
  return user;
};

export const authServices = {
  registerUserIntoDB,
  loginUserIntoDB,
  getUserIntoDB,
};
