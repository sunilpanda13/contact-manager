import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public head : string = "Contact Manager";
  public isShow:boolean = false;
  public change :boolean = false;
  public userName : string = localStorage.getItem("userName") || '';
  constructor(private _router:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem("token")){
      this.isShow = true;
      this.head = "Welcome "+this.userName;
    }else{
      this.isShow = false;
    }
  }

  onLogout(){
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    localStorage.removeItem("userId");
    this._router.navigate([""]);
  }

  onClick(){
    this.change = true;
  }
}
