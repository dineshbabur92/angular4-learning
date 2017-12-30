import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	projectForm: FormGroup;
	projectStates: string[] = ['Stable', 'Critical', 'Finished'];
	isFormSubmitted: boolean = false;
	formValues = {
		projectName : '',
		email: '',
		projectState: ''
	}

	ngOnInit(){
		this.projectForm = new FormGroup({
			"projectInfo": new FormGroup({
				// "projectName": new FormControl(null, [Validators.required, this.invalidProjectNames.bind(this)]),
				"projectName": new FormControl(null, [Validators.required], this.asyncInvalidProjectNames),
				"email": new FormControl(null, [Validators.required, Validators.email])
			}),
			"projectState": new FormControl(null) 
		});

		this.projectForm.get("projectInfo.projectName")
			.statusChanges.subscribe((status) => {console.log(status);});
	}

	invalidProjectNames(control: FormControl): {[s: string]: boolean}{
		if(control.value && control.value.toLowerCase() === "test"){
			console.log("this is a test");
			return {"invalidProjectName": true};
		}
		console.log("not a test at all");
		return null;
	}

	asyncInvalidProjectNames(control: FormControl): Promise<any> | Observable<any>{
		
			const promise = new Promise<any>((resolve, reject)=>{
				setTimeout( () => {
					if(control.value && control.value.toLowerCase() === "test"){
						// console.log("this is a test");
						resolve({"invalidProjectName": true});
					}
					else{
						// console.log("not a test at all");
						resolve(null);
					}
				}, 3000);
			});
			return promise;
			
	}

	// forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
	//     const promise = new Promise<any>((resolve, reject) => {
	//       setTimeout(() => {
	//         if (control.value === 'test@test.com') {
	//           resolve({'emailIsForbidden': true});
	//         } else {
	//           resolve(null);
	//         }
	//       }, 1500);
	//     });
	//     return promise;
	//  }

	onSubmit(){

		console.log(this.projectForm.value);
		this.isFormSubmitted = true;

		this.formValues.projectName = this.projectForm.value.projectInfo.projectName;
		this.formValues.email = this.projectForm.value.projectInfo.email;
		this.formValues.projectState = this.projectForm.value.projectState;

		this.projectForm.reset();

		// this.projectForm.reset();

	}
}
