import { NavbarService } from './../services/navbar.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from './../services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:any={}
  logInMessage: String;
  customLoginClass: String;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private navbarSerivce: NavbarService,
    private loginService: LoginService
  ) { 
    localStorage.clear();
  }

  ngOnInit() {
  }

  login(info) {
    this.loginService.getUser(info.value).subscribe( user =>{
      this.user = user;

      if(this.user !=  null) {

        if(this.user.password == info.value.password){
          this.logInMessage = "Logged In Successfully";
          this.customLoginClass = "alert alert-success";

          localStorage.setItem('email',this.user.email);
          localStorage.setItem('admin',this.user.isAdmin);
          localStorage.setItem('username', this.user.fname + ' ' + this.user.lname);

          this.navbarSerivce.loginUser(this.user.isAdmin);
        
          let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
          setTimeout( () => {
             this.router.navigateByUrl(returnUrl); 
          }, 1000);  

        } else {
          this.logInMessage = "Invalid Password";
          this.customLoginClass = "alert alert-danger";
        }

      } else {
        this.logInMessage = "Invalid Email";
        this.customLoginClass = "alert alert-danger";
      }
      
    }); 
  }

}
