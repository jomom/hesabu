import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder : FormBuilder,
    private http : HttpClient,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName : '',
      secondName : '',
      email : '',
      password : '',
      password_confirm : ''
    })
  }

  submit(): void{
    this.http.post('http://localhost:3000/auth/register', this.form.getRawValue())
      .subscribe(( ) => this.router.navigate(['/login']))
  }

}
