import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>`,
})
export class AppComponent  { 
 
  name = ''; 

  constructor(private appService: AppService) {
     appService.getAppName().subscribe( (response) => {
            this.name = response.text();
      });
  }

}
