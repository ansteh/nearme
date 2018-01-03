import { Component } from '@angular/core';

// import * as _ from 'lodash';
import { get } from 'lodash';

console.log(get({ a: 'test' }, 'a'));

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'near me';
}
