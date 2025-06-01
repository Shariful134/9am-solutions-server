import { z } from 'zod';

const userValidationSchema = z.object({
  body: z.object({
    username: z.string().nonempty({ message: 'name is required' }).trim(),
    password: z
      .string()
      .min(8, { message: 'Password must be at least 8 characters long' })
      .regex(/^(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, {
        message:
          'Password must be at least 8 characters, contain at least one number, and one special character,',
      }),
    shops: z
      .array(z.string().min(1, 'Shop name cannot be empty'))
      .min(3, { message: 'You must provide at least 3 shop names.' })
      .max(4, { message: 'You can provide at most 4 shop names.' }),
    role: z.enum(['admin', 'user']).default('user'),
  }),
});

const loginValidationschema = z.object({
  body: z.object({
    username: z.string({ required_error: 'UserName is required' }),
    password: z.string({ required_error: 'Password is required' }),
    rememberMe: z.boolean().default(false),
  }),
});

const refreshTokenValidationSchema = z.object({
  cookies: z.object({
    refreshToken: z.string({
      required_error: 'Refresh token is required!',
    }),
  }),
});

export const authValidations = {
  userValidationSchema,
  loginValidationschema,
  refreshTokenValidationSchema,
};
