import { Component, OnInit } from '@angular/core';
import { menus } from './menus';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  
  menus: any = menus

  constructor() { }

  ngOnInit() {
  }

}
