import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'Venkat@55'
  password = ''
  errorMessage= 'Invalid Credentials'
  invalidLogin = false

  constructor(private router : Router,
    private  hardcodedAuthenticationService : HardcodedAuthenticationService ) { }

  ngOnInit() {
    this.hardcodedAuthenticationService.isUserLoggedIn();
  }

  handleLogin(){

    // console.log(this.username);
    // console.log(this.password);
    // if(this.username==='Venkat@55'&&this.password==='dummy')
    if(this.hardcodedAuthenticationService.authenticate(this.username,this.password))
    {
      this.router.navigate(['welcome',this.username])
      this.invalidLogin = false
    }
    else
    {
      this.invalidLogin = true
    }
  }
}
