import { Component } from '@angular/core';
import { slideMenuAnimation } from 'src/app/_helpers/animations';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <div [@changeMenu]="prepareRoute(outlet)">  
      <router-outlet #outlet="outlet"></router-outlet>
    </div>
  `,
  animations: [
    slideMenuAnimation
  ]
})
export class AppComponent { 

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
