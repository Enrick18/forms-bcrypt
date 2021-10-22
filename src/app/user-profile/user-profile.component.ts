import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as bcrypt from 'bcryptjs' 

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  showMe:boolean=false


  constructor() { }

  ngOnInit(): void {
  }

  val = {
    firstname:null,
    lastname:null,
    age:null,
    email:null,
    password:'',
  }
 
  salt = bcrypt.genSaltSync(12);
  pass = bcrypt.hashSync(this.val.password, this.salt);
  
  onSubmit(v:NgForm){
    this.showMe=true;
    
  }

  

}
