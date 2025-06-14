import { JwtPayload } from 'jsonwebtoken';

export interface CustomJwtPayload extends JwtPayload {
  _id: string;
  username: string;
  role: string;
}

declare global {
  namespace Express {
    interface Request {
      user: CustomJwtPayload;
    }
  }
}
