import { Component } from '@angular/core';
import { Tools } from './tools'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tools: any = Tools;

}
