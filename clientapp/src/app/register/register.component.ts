import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../services/register.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  dataRegister:any={}
  message;
  success;

  constructor(private router: Router,
    private registerService: RegisterService) { }

  ngOnInit() {
  }

  register(info) {
    this.registerService.addUser(info.value).subscribe( data => {

      this.dataRegister = data;
      this.success = this.dataRegister.success;
      this.message = this.dataRegister.message;
      console.log(this.success);
      console.log(this.message);
      
      if(this.success) {
        setTimeout( () => {
          this.router.navigate(['/login']);
        }, 2000);  
      }
    });
  }

}
