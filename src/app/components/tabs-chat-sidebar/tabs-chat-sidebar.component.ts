import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from 'src/app/_helpers/animations';

@Component({
  selector: 'app-tabs-chat-sidebar',
  templateUrl: './tabs-chat-sidebar.component.html',
  styleUrls: ['./tabs-chat-sidebar.component.scss'],
  animations: [
    slideInAnimation
  ]
})
export class TabsChatSidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
