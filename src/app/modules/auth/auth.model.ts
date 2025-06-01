/* eslint-disable @typescript-eslint/no-this-alias */
import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';

import config from '../../config';
import { TUser, UserModel } from './auth.interface';

const userSchema = new Schema<TUser>(
  {
    username: { type: String, required: true },
    password: {
      type: String,
      required: true,
      select: 0,
      validate: {
        validator: function (value: string) {
          return /^(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
            value,
          );
        },
        message:
          'Password must be at least 8 characters and contain at least one uppercase letter, one lowercase letter, one number, and one special character (@, $, %, etc.).',
      },
    },
    shops: {
      type: [String],
      required: true,
      validate: {
        validator: function (arr) {
          return arr.length >= 3 && arr.length <= 4;
        },
        message: 'You must provide 3 to 4 shop names.',
      },
    },
    role: { type: String },
  },
  {
    timestamps: true,
  },
);

// hashing password and save into DB
userSchema.pre('save', async function (next) {
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds),
  );
  next();
});

// check user
userSchema.statics.isUserExistsByUserName = async function (username: string) {
  return await User.findOne({ username }).select('+password');
};

// check password
userSchema.statics.isPasswordMatched = async function (
  planTextPassword,
  hashedPassword,
) {
  return await bcrypt.compare(planTextPassword, hashedPassword);
};

export const User = model<TUser, UserModel>('User', userSchema);
