export class Review {
  _id: String;
  user: {
    _id: string,
    name: String,
  };
  reviewContent: String;
  createdAt: Number;
}
