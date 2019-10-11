import { Injectable } from '@angular/core';
import { NavbarComponent } from './../navbar/navbar.component';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  //domain = "http://localhost:3000";

  constructor(private http: HttpClient) {
  }

   private cartSubject = new Subject<NavbarComponent>();
   NavbarComponent = this.cartSubject.asObservable();

  addToCart(product) {
    return this.http.post('api/cart', product).pipe(map(res=> res));
    /* this.cartSubject.next(<NavbarComponent>); */
  }
 
  getCart() {
    return this.http.get('api/cart').pipe(map(res=> res));
  }

  updateCart(product) {
    return this.http.put('api/cart', product).pipe(map(res=> res));
  }

  clearCart() {
    return this.http.delete('api/clearCart').pipe(map(res=> res));
  }
}
