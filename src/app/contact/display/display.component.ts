import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  @Input("contactData") public contact !: any ;
  public hidden :boolean = true;
  public ca:any;
  constructor() { }

  ngOnInit(): void {
  }
  isHidden(){
    return this.contact != undefined;
  }
}
