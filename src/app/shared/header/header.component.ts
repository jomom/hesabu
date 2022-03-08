import { Component, OnInit } from '@angular/core';
import { MenuItem } from './header.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menuItems: MenuItem[] = [
    {
      label: 'Features',
      positionRight:false,
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true
    },
    {
      label: 'Modules',
      positionRight:false,
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true
      
    },
    {
      label: 'Login',
      positionRight:true,
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true
      
    },
    {
      label: 'Get Started',
      positionRight:true,
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true

      
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
