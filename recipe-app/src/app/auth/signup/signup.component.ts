import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Store } from "@ngrx/store";

// import { AuthService } from "../auth.service";
import * as AppReducers from "../../store/app.reducers";
// import * as AuthReducers from "../store/auth.reducers";
import * as AuthActions from "../store/auth.actions";
// import * as firebase from "firebase";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    // private authService: AuthService, 
    private store: Store<AppReducers.AppState>) { }

  ngOnInit() {
  }

  onSignup(form: NgForm){
  	const email = form.value.email;
  	const password = form.value.password;
    this.store.dispatch(new AuthActions.TrySignup({ email: email, password: password }));
  	// this.authService.signup(email, password);
    // firebase.auth().createUserWithEmailAndPassword(email, password)
    //   .then(() => {
    //     console.log("sign up completed");
    //     firebase.auth().currentUser.getToken()
    //       .then((token: string) => {
    //           console.log("sign up completed, token, ", token);
    //           this.store.dispatch(new AuthActions.SetToken(token));
    //           this.store.dispatch(new AuthActions.Signup({username: email, password: password}));
    //       });
    //   })
    //   .catch(
    //       (error) => console.log(error)
    //   );  
  }

}
