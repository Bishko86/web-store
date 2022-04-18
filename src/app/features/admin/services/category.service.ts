import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/core/models';

@Injectable()
export class CategoryService {

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>('/categories');
  }

  addCategory(categoryId: string): Observable<any> {
    return this.http.post(`/categories`, { categoryId });
  }

  removeCategory(categoryId: string): Observable<any> {
    return this.http.delete(`/categories/${categoryId}`);
  }
}
