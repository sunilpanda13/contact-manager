import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/contact.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Output() public displayContact = new EventEmitter();
  public contactData:any[]=[]
  constructor(private _ps:ContactService,private _router:Router) { }

  ngOnInit(): void {
    this.showContact();
  }

  showContact(){
    this._ps.listAllContactsByUser().subscribe(response=>{
      this.contactData=response.contacts;
    },err=>{
      console.log(err);
    })
  }
  onView(contact:any){
    this.displayContact.emit(contact);
  }

  onDelete(contact:any){
    this._ps.deleteContact(contact._id).subscribe(response=>{
      this.showContact();
    },err=>{
      console.log(err);
    })
  }
}
