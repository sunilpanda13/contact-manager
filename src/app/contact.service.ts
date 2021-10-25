import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private _http:HttpClient) { }

  listAllContactsByUser(){
    return this._http.get<{message:string,contacts:any}>(environment.baseUrlContact+"/contacts/"+localStorage.getItem("userId"),{headers: new HttpHeaders().set("x-auth-token",localStorage.getItem("token")||'')});
  }

  getContactById(id:string){
    return this._http.get<{message:string,contact:any}>(`${environment.baseUrlContact}/contactById/${id}`,{headers: new HttpHeaders().set("x-auth-token",localStorage.getItem("token")||'')});
  }

  updateContact(id:string,post:any){
    return this._http.put<{message:string}>(`${environment.baseUrlContact}/update/${id}`,post,{headers:new HttpHeaders().set("x-auth-token",localStorage.getItem("token")||'')});
  }

  addContact(contact:any){
    return this._http.post<{message:string}>(environment.baseUrlContact+"/add/",contact,{headers: new HttpHeaders().set("x-auth-token",localStorage.getItem("token")||'')});
  }

  deleteContact(id:string){
    return this._http.delete<{message : string}>(`${environment.baseUrlContact}/delete/${id}`,{headers:new HttpHeaders().set("x-auth-token",localStorage.getItem("token")||'')});
  }
}
