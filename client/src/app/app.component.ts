import { Component } from '@angular/core';
import {ClienteService} from './services/client.service';


@Component({
  moduleId:module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers:[ClienteService]
})
export class AppComponent  { name = 'Angular'; }
