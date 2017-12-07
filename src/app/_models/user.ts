import { Hotel } from '../models/hotel.class';

export class User {
  _id: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  token: String;
  added_hotels: String[];
}
