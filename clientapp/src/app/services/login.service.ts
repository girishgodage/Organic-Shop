import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  //domain = "http://localhost:3000";

  constructor(private http: HttpClient ) { }

  getUser(user) {
    return this.http.post('api/findUser', user).pipe(map(res => res)); 
  }
} 
