import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  name: string | undefined;
  email: string | undefined;
  message: string | undefined;

  constructor() { }

  ngOnInit(): void {
    // create api call
    // create form based on api call
    
  }
  submitForm(){
    const message = `name is ${this.name}. email is ${this.email}. message is ${this.message}`;
    // grab all the fieldsand their values
    alert(message);
  }

}
