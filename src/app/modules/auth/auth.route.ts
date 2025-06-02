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
router.get('/get-user/:id', authContarollers.getUser);

export const authRoutes = router;
