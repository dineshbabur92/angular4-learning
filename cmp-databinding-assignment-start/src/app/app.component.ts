import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	oddNumbers = [];
	evenNumbers = [];

	countIncremented(count){
		// console.log(event);
		(count%2==1) ? this.oddNumbers.push(count) : this.evenNumbers.push(count);
	}


}
