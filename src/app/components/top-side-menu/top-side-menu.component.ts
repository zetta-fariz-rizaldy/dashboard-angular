import { Component, OnInit } from '@angular/core';
import {items} from '../../arrays/topSideMenuArray';

@Component({
  selector: 'app-top-side-menu',
  templateUrl: './top-side-menu.component.html',
  styleUrls: ['./top-side-menu.component.sass']
})
export class TopSideMenuComponent implements OnInit {
  items = items;

  constructor() { }

  ngOnInit() {
  }

}
