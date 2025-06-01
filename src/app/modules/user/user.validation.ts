// import { z } from 'zod';

// const userValidationSchema = z.object({
//   body: z.object({
//     name: z.string().nonempty({ message: 'name is required' }).trim(),
//     email: z.string().email({ message: 'Invalid email format' }),
//     // password: z
//     //   .string()
//     //   .min(6, { message: 'Password must be at least 6 characters long' }),
//     password: z
//       .string()
//       .min(6, { message: 'Password must be at least 6 characters long' })
//       .regex(
//         /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
//         {
//           message:
//             'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character (@, $, %, etc.).',
//         },
//       ),
//     role: z.enum(['admin', 'user']).default('user'),
//     isBlocked: z.boolean().default(false),
//   }),
// });

// export const userValidation = {
//   userValidationSchema,
// };
