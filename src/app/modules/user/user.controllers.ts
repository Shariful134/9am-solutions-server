// import { RequestHandler } from 'express';
// import catchAsync from '../../utils/catchAsync';
// import sendResponse from '../../utils/sendResponse';
// import { StatusCodes } from 'http-status-codes';
// import { userServices } from './user.services';

// const registerUser: RequestHandler = catchAsync(async (req, res, next) => {
//   const result = await userServices.registerUserIntoDB(req.body);
//   sendResponse(res, {
//     statusCode: StatusCodes.CREATED,
//     success: true,
//     message: 'User registered successfully',
//     data: result,
//   });
// });
// export const userControllers = {
//   registerUser,
// };
