import { Component, OnInit } from '@angular/core';
import { NavbarService } from './../services/navbar.service';
import { WishlistService } from './../services/wishlist.service';
import { CartService } from './../services/cart.service';
import { Router } from '@angular/router';
import { Subscription,BehaviorSubject } from 'rxjs';


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  admin;
  username;
  cart: any[];
  dataCart:any={}
  cartCount;
  wishlist: any[];
  dataWishlist:any={}
  wishCount=0;

  cartCountSubscription: Subscription;
  wishCountSubscription: Subscription;
  loginSubscription: Subscription;
  logoutSubscription: Subscription;
  clearCartSubscription: Subscription;  

  constructor(
    private cartService: CartService,
    private navbarService: NavbarService,
    private wishListService: WishlistService
  ) {
      this.cartCountSubscription = navbarService.cartCount$.subscribe( cartCount => {
        this.cartCount = cartCount;
      });

      this.wishCountSubscription = navbarService.wishCount$.subscribe( wishCount =>  {
        this.wishCount = wishCount;
      });

      this.loginSubscription = navbarService.login$.subscribe( isAdmin => {
        this.admin = isAdmin || null; 
        this.username = localStorage.getItem('username') || null;
      });

      this.logoutSubscription = navbarService.logout$.subscribe( isAdmin => {
        this.admin = isAdmin;
      });

      this.clearCartSubscription = navbarService.clearCart$.subscribe( value => {
        this.cartCount = 0;
      }); 

      this.admin = localStorage.getItem('admin') || null;
      this.username = localStorage.getItem('username') || null;

      this.cartService.getCart().subscribe( cart => {
        this.dataCart = cart;
        this.cartCount = this.dataCart.length;
        /* for(let c in cart) {
          this.cartCount += cart[c].quantity;
        }   */
      });

      this.wishListService.getWishlist().subscribe( wishlist => {
        this.dataWishlist = wishlist;
        this.wishCount = this.dataWishlist.length;
      });
    }
  logoutUser() {
      localStorage.clear();
      this.navbarService.logoutUser();
  }  
  ngOnInit() {
  }

}
