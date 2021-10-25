import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/contact';
import { ContactService } from 'src/app/contact.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  public addContact = new Contact('','','','','');
  constructor(private _contactService : ContactService) { }
  public userId = localStorage.getItem("userId") || '';
  public message !: string;
  public isError : boolean = false;
  public isSuccess : boolean = false;
  public confirmpassowrd !: string;
  ngOnInit(): void {
  }
  onSubmitContact(){
    this.addContact.userId = this.userId;
    this._contactService.addContact(this.addContact).subscribe(response=>{
      this.message = response.message;
      this.isSuccess=true;
      this.isError=false;  
    },err=>{
      this.message=err.error.message;
      this.isError=true;
      this.isSuccess=false;
    });
  }
}
