import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 // domain = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  registerProduct(product) {
    return this.http.post('api/register', product).pipe(map(res => res));   ;
  }

  getProducts() {
    return this.http.get('api/register').pipe(map(res => res));   ;
  }

  getProductByName(productName) {
    return this.http.post('api/findProduct', productName).pipe(map(res => res));   ;
  }

  deleteProduct(product) {
    return this.http.post('api/deleteProduct', product).pipe(map(res => res));   ;
  }

  updateProduct(product) {
    return this.http.put('api/updateProduct', product).pipe(map(res => res));   ;
  }
}
