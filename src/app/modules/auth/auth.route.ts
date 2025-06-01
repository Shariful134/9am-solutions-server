import express from 'express';

import { authValidations } from './auth.validation';
import validateRequest from '../../middlewares/validateRequest';
import { authContarollers } from './auth.contarollers';

const router = express.Router();

router.post(
  '/register',
  validateRequest(authValidations.userValidationSchema),
  authContarollers.registerUser,
);

router.post(
  '/login',
  validateRequest(authValidations.loginValidationschema),
  authContarollers.loginUser,
);
// router.post(
//   '/refresh-token',
//   validateRequest(authValidations.refreshTokenValidationSchema),
//   authContarollers.refreshToken,
// );

export const authRoutes = router;
