import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../environments/environment' 

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public authtoken=localStorage.getItem('token')||'null';
  constructor(private _http : HttpClient) { }

  registerUser(user:any){
    return this._http.post<{message : string,user : any}>(environment.baseUrlUser+"/register",user);
  }

  signInUser(userInfo : any){
    return this._http.post<{message : string,user : any,token : string}>(environment.baseUrlUser+"/signIn",userInfo);
  }

  checkEmail(email:any){
    return this._http.post<{message:string,exist:any}>(environment.baseUrlUser+"/checkEmail",email);
  }
  isSignedIn(){
    if(localStorage.getItem("token") === null){
      return false;
    }else{
      return !!this.authtoken;
    }
  }
}
