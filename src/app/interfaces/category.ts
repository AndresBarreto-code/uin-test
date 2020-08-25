import { Product } from "./product";

export interface Category {
  id: Number;
  name: String;
  ordinal: Number;
  products: Product[];
}
