import { User } from './user';

export class Hotel {
  _id: string;
  name: string;
  location: string;
  description: string;
  createdBy: User;
  createdAt: Number;
}
