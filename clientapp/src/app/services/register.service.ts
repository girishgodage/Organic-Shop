import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
 // domain = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  addUser(user) {
   return this.http.post('api/user', user).pipe(map(res => res));   
  }

}
