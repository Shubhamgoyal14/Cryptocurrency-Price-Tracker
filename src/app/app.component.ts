import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'crypT13App';

  selectedCurrency : string = "USD";
  constructor(){

  }
  sendCurrency(event:string){
    console.log(event);
  }
}
