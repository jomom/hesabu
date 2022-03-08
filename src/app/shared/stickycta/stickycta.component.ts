import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stickycta',
  templateUrl: './stickycta.component.html',
  styleUrls: ['./stickycta.component.scss']
})
export class StickyctaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    
  }
}
