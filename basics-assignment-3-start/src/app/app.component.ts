import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	isDisplayDetails = false;
	detail_ids = [];
	counter = 0;

	onDisplayDetails(){
		this.isDisplayDetails = !this.isDisplayDetails;
		this.counter += 1
		this.detail_ids.push(this.counter);
	}
}
