export interface Product {
  id?: string;
  name: string;
  description: string;
  price: number;
  photos: DbFileModel[];
  categoryId: string;
  createdAt: number;
}

export interface DbFileModel {
  name: string;
  url: string;
}
