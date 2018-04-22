export class Menu {
  _id: string;
  cafeId: string;
  image: string;
  price: string;
  description: string;

  constructor(_id: string, cafeId: string, image: string, price: string, description: string) {
    this._id = _id;
    this.cafeId = cafeId;
    this.image = image;
    this.price = price;
    this.description = description;
  }
}
