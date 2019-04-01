import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gtr-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['../css/styles.css']
})
export class MenuComponent implements OnInit {

  menuTitle: string;
  menuSubTitle: string;

  constructor() { }

  ngOnInit() {
    this.menuTitle = 'Charles Guitar Wish List';
    this.menuSubTitle = 'Guitars you should play, guitars you should own';
  }

}
