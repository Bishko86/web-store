export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  photo?: string;
  categoryId: string;
  createdAt: number;
}
