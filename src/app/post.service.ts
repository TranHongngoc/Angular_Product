import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IProduct} from "./product";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private readonly URL = 'http://localhost:3333/products';

  constructor(private http: HttpClient) {
  }

  getPosts(count = -1): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.URL).pipe(
      map(response => response.filter((post,i) => i > count))
    );
  }

  getPostById(id: number): Observable<IProduct>{
    return this.http.get<IProduct>(`${this.URL}/${id}`);
  }

  createProduct(product: Partial<IProduct>): Observable<IProduct>{
    return this.http.post<IProduct>(this.URL,product);
  }

  deleteProduct(id: number): Observable<any>{
    return this.http.delete(`${this.URL}/${id}`);
  }

  updateProduct(product: IProduct): Observable<IProduct>{
    return this.http.patch<IProduct>(`${this.URL}/${product.id}`,product);
  }

}
