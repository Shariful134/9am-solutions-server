import { NextFunction, Request, Response } from 'express';
import catchAsync from '../utils/catchAsync';
import jwt from 'jsonwebtoken';
import config from '../config';

import AppError from '../errors/AppError';
import { StatusCodes } from 'http-status-codes';

import { CustomJwtPayload } from '../interface';
import { TUserRole } from '../modules/auth/auth.interface';
import { User } from '../modules/auth/auth.model';

const auth = (...requiredRoles: TUserRole[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;
    console.log(token);

    //if the token is sent to the client side
    if (!token) {
      throw new AppError(StatusCodes.UNAUTHORIZED, 'Your are not Authorized!');
    }

    //new add token verify
    let decoded;
    // console.log(decoded);
    try {
      decoded = jwt.verify(
        token,
        config.jwt_access_secret as string,
      ) as CustomJwtPayload;
    } catch (error) {
      throw new AppError(StatusCodes.UNAUTHORIZED, 'Unauthorized');
    }

    const { username, role, iat, exp } = decoded;
    console.log(role);

    const user = await User.isUserExistsByUserName(username);

    //checking user is exists
    if (!user) {
      throw new AppError(StatusCodes.NOT_FOUND, 'User not found');
    }

    if (requiredRoles && !requiredRoles.includes(role as TUserRole)) {
      throw new AppError(StatusCodes.UNAUTHORIZED, 'Your are not Authorized!');
    }
    req.user = decoded;
    next();
  });
};

export default auth;
