import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  catLogo = '';

  constructor() {}

  ngOnInit(): void {
    this.catLogo = './../../../assets/images/cat_logo.jpg';
  }
}
