import { Injectable } from '@angular/core';
import { Router, CanActivate, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate {

  isAdmin;

  constructor(private router: Router) { }

  canActivate(route, state: RouterStateSnapshot) {
    this.isAdmin = localStorage.getItem('admin');
    if(this.isAdmin == 'true') 
      return true;
    return false;
  }
}
