import { ProductImage } from "src/app/features/admin/product/models/product-image.model";

export interface Product {
  id?: string;
  name: string;
  description: string;
  price: number;
  photo: ProductImage[];
  categoryId: string;
  createdAt: number;
}
