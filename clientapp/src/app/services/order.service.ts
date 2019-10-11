import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  //domain = "http://localhost:3000";

  constructor(private http: HttpClient) { }
  

  saveOrder(order) {
    return this.http.post('api/Order', order).pipe(map(res => res));
  }

  getOrder() {
    return this.http.get('api/Order').pipe(map(res => res));
  }

  dispatchOrder(order) {
    return this.http.put('api/dispatchOrder', order).pipe(map(res => res));
  }
}
