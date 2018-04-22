export class Cafe {
  _id: string;
  placeId: string;
  ownerId: string;
  name: string;
  address: string;
  phone: string;
  price_level: number;
  rating: number;
  is_open: boolean;
  weekday_text: string[];
  icon: string;
  avatar: string;
  photos: string[];

  constructor(placeId: string, name: string, ownerId: string) {
    this.placeId = placeId;
    this.name = name;
    this.ownerId = ownerId;
  }
}
