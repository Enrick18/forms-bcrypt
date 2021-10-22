import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

  showMe:boolean=false

  form= this.fb.group({
    companyName: ['',{
      validators: [Validators.required, Validators.maxLength(20), Validators.minLength(2)]
    }],
    jobPosition: ['',{
      validators: [Validators.required, Validators.maxLength(20), Validators.minLength(2)]
    }],
    empID: ['',{
      validators: [Validators.required, Validators.maxLength(9), Validators.minLength(4)]
    }],
    department: ['',{
      validators: [Validators.required, Validators.maxLength(20), Validators.minLength(2)]
    }],
    salary: ['',{
      validators: [Validators.required, Validators.minLength(3)]
    }]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.showMe=true;
  }

  get companyName(){
    return this.form.controls['companyName']
  }

  get jobPosition(){
    return this.form.controls['jobPosition']
  }

  get empID(){
    return this.form.controls['empID']
  }

  get department(){
    return this. form.controls['department']
  }

  get salary(){
    return this.form.controls['salary']
  }

  get valid(){
    return this.form;
  }

  

}
