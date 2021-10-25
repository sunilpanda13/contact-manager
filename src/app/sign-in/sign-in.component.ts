import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  public message !: string;
  public isError : boolean = false;
  public isSuccess : boolean = false;
  public userEmail !: string;
  public userPassword !: string;
  constructor(private _userService : UserService,private _router:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem("token")){
      this._router.navigate(["/dashboard"])
    }
  }

  onSignIn(){
    const singInInfo = {
      email : this.userEmail,
      password : this.userPassword
    }
    this._userService.signInUser(singInInfo).subscribe(response=>{
      this.message=response.message;
      this.isError=false;
      this.isSuccess=true;
      localStorage.setItem("token",response.token);
      localStorage.setItem("userId",response.user.id);
      localStorage.setItem("userName",response.user.name);
      this._router.navigate(["/dashboard"])
    },err=>{
      this.message = err.error.message;
      this.isError=true;
      this.isSuccess=false;
    })
  }
}
