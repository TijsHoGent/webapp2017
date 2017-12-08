import { User } from './user';
import { Review } from './review';

export class Hotel {
  _id: string;
  name: String;
  location: String;
  description: String;
  createdBy: String;
  createdAt: Number;
  reviews: Review[];
}
