import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  //domain = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  addToWishlist(product) {
    return this.http.post('api/wishlist', product).pipe(map(res=> res));
  }
 
  getWishlist() {
    return this.http.get('api/wishlist').pipe(map(res=> res));
  }

  removeFromWishlist(product) {
    return this.http.post('api/removeFromWishlist', product).pipe(map(res=> res));
  }
}
