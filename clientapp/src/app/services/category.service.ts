import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
 // domain = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  addCategory(category) {
    return this.http.post('api/category', category).pipe(map(res => res));   ;
  }

  getCategory() {
    return this.http.get('api/category').pipe(map(res => res));   ;
  }
}
