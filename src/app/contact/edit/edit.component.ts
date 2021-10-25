import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from 'src/app/contact';
import { ContactService } from 'src/app/contact.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public contactId !: string;
  public editcontact = new Contact('','','','','');
  public message !: string;
  public isError : boolean = false;
  public isSuccess : boolean = false;
  public confirmpassowrd !: string;
  constructor(private _contactService : ContactService,private _acroute : ActivatedRoute) { }

  ngOnInit(): void {
    this._acroute.params.subscribe(param=>{
      this.contactId = param.id;
    })
    
    this._contactService.getContactById(this.contactId).subscribe(response=>{
      this.contactId = response.contact._id;
      this.editcontact.name = response.contact.name;
      this.editcontact.phone = response.contact.phone.toString();
      this.editcontact.email = response.contact.email;
      this.editcontact.type = response.contact.type;
      this.editcontact.userId = response.contact.userId;
    },err=>{
      console.log(err);
    })
  }

  onSubmitContact(){
    this._contactService.updateContact(this.contactId,this.editcontact).subscribe(response=>{
      this.message = response.message;
      this.isSuccess=true;
      this.isError=false;  
    },err=>{
      this.message=err.error.message;
      this.isError=true;
      this.isSuccess=false;
    })
  }

}
