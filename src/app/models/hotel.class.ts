import { Serializable } from './serializable.interface';

export class Hotel implements Serializable<Hotel> {
  _id: Number;
  name: String;
  hotelDescription: String;
  location: String;
  stars: Number;
  reviews: String[];

  constructor() {}

  deserialize(input): Hotel {
    this._id = input._id;
    this.name = input.name;
    this.hotelDescription = input.description;
    this.location = input.location_name;
    this.stars = input.stars;
    this.reviews = input.reviews;
    return this;
  }
}
