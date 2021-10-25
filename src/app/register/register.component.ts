import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public user = new User("","","");
  public message !: string;
  public isError : boolean = false;
  public isSuccess : boolean = false;
  public confirmpassword : string="";
  public isCheckPass : boolean = false;
  public isEmailExist : boolean = false;
  
  constructor(private _userService : UserService,private _router : Router) { }

  ngOnInit(): void {
    if(localStorage.getItem("token")){
      this._router.navigate(["/dashboard"])
    }
  }
  
  onSubmitForm(){
    this._userService.registerUser(this.user).subscribe(response=>{
      this.message = response.message;
      this.isSuccess=true;
      this.isError=false;
    },err=>{
      this.message=err.error.message;
      this.isError=true;
      this.isSuccess=false;
    });
  }
  checkPass(){
    if(this.confirmpassword != this.user.password)
      this.isCheckPass = true;
    else
      this.isCheckPass = false;
  }
  checkEmail(email:any){
    
    if(email.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)){
      this._userService.checkEmail({email:email}).subscribe(response=>{
        
        if(response.exist){
          this.isEmailExist=true;
        }else{
          this.isEmailExist=false;
        }
      },err=>{
        console.log(err);
      })
    }
  }
}
