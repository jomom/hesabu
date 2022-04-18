import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Auth }  from '../../../classes/auth'




@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  message =''

  constructor(
    private http : HttpClient
  ) { }

  ngOnInit(): void {

    this.http.get('http://localhost:3000/auth/user')
      .subscribe(
        (user:  any) => {
            this.message = `Hi welcom ${user.firstName} ${user.secondName}`;
            Auth.authEmitter.emit(true);
        },
        () => {
          this.message = "You are not logged in"
          Auth.authEmitter.emit(false);
        }
      )


      

  }

  
 

}
