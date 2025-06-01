import { RequestHandler } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { StatusCodes } from 'http-status-codes';
import { authServices } from './auth.services';
import config from '../../config';

//Register
const registerUser: RequestHandler = catchAsync(async (req, res) => {
  const result = await authServices.registerUserIntoDB(req.body);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: 'User registered successfully',
    data: result,
  });
});

//login User
const loginUser: RequestHandler = catchAsync(async (req, res) => {
  const result = await authServices.loginUserIntoDB(req.body);

  const { accessToken, rememberMe } = result;
  // console.log({ accessToken, refreshToken });

  res.cookie('accessToken', accessToken, {
    secure: config.node_env === 'production',
    httpOnly: true,
    domain: '.localhost',
    sameSite: 'lax',
    maxAge: rememberMe ? 1000 * 60 * 60 * 24 * 7 : 1000 * 60 * 30,
  });

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Login Successfully!',
    data: null,
  });
});

//refresh token create
// const refreshToken = catchAsync(async (req, res, next) => {
//   const { refreshToken } = req.cookies;
//   const result = await authServices.refreshTokenIntoDB(refreshToken);

//   sendResponse(res, {
//     statusCode: StatusCodes.OK,
//     success: true,
//     message: 'Access token is retrieved succesfully!',
//     data: result,
//   });
// });

export const authContarollers = {
  registerUser,
  loginUser,
};
