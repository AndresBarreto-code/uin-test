import { ProductCategory } from '../interfaces/product-category';

export interface ProductData {
  categories: ProductCategory[];
  ean: String;
  id: Number;
  kind: Number;
  name: String;
  price: Number;
}