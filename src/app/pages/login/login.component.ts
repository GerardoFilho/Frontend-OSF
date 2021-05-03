import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../../services/firebase.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  title = 'firebase-angular-auth';
  isSignedIn = false
  constructor(public firebaseService : FirebaseService, private router: Router) { }

  ngOnInit(): void {
    alert('Project only mobile, for now. Try on Iphone X or similar on dev tool :)');
    if(localStorage.getItem('user')!== null)
    this.isSignedIn= true
    else
    this.isSignedIn = false
  }
  async onSignup(email:string,password:string){
    await this.firebaseService.signup(email,password)
    if(this.firebaseService.isLoggedIn)
    this.isSignedIn = true
  }
  async onSignin(email:string,password:string){
    await this.firebaseService.signin(email,password)
    if(this.firebaseService.isLoggedIn)
    this.isSignedIn = true
    this.router.navigate(['home'])
  }
  handleLogout(){
    this.isSignedIn = false

  }

}
