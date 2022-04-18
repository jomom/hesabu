import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {

 
  form: FormGroup;
  cls ='';
  message = '';

  constructor(
    private formBuilder : FormBuilder,
    private http : HttpClient,
    
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
     
      email : ''
    })
  }

  submit(): void{
    this.http.post('http://localhost:3000/auth/forgot', this.form.getRawValue())
      .subscribe(
        ( ) => {
          this.cls = 'success';
          this.message = 'Email was Sent !'
      },
      () => {
        this.cls = 'danger';
        this.message = "Email  does not exist"
      }
      
      )
  }

}
