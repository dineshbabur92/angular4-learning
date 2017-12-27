import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	@ViewChild('f') subscriptionForm: NgForm;
	isFormSubmitted: boolean = false;
	formValues = {
		email : '',
		password: '',
		subscription: ''
	}

	onSubmit(){
		console.log(this.subscriptionForm.value);
		this.isFormSubmitted = true;

		this.formValues.email = this.subscriptionForm.value.email;
		this.formValues.password = this.subscriptionForm.value.password;
		this.formValues.subscription = this.subscriptionForm.value.subscription;

		this.subscriptionForm.reset();
	}
}
