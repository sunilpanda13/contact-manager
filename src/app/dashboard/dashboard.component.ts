import { Component, OnInit } from '@angular/core';
import { DisplayComponent } from '../contact/display/display.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public contact !:any ;
  constructor() { }

  ngOnInit(): void {
  }
  onDisplayContact(event:any){
    this.contact = event;
    
  }
}
