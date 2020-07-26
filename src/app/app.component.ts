import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `<div>
    <h1>{{pageHeader}}</h1>
    <my-customer></my-customer>
    </div>`,
   styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'angularFirst';
  pageHeader: string = "Customer Details";
}
