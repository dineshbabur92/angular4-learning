import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Store } from "@ngrx/store";

// import { AuthService } from "../auth.service";
import * as AppReducers from "../../store/app.reducers";
// import * as AuthReducers from "../store/auth.reducers";
import * as AuthActions from "../store/auth.actions";
// import * as firebase from "firebase";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(
    // private authService: AuthService, 
    private store: Store<AppReducers.AppState>) { }

  ngOnInit() {
  }

  onSignin(form: NgForm){
  	const email = form.value.email;
  	const password = form.value.password;
    console.log("dispatching sign in event");
    this.store.dispatch(new AuthActions.TrySignin({ email: email, password: password }));
  	// this.authService.signin(email, password);
    // firebase.auth().signInWithEmailAndPassword(email, password)
    //   .then(() => {
    //     firebase.auth().currentUser.getToken()
    //       .then((token: string) => {
    //           this.store.dispatch(new AuthActions.SetToken(token));
    //           this.store.dispatch(new AuthActions.Signin({username: email, password: password}));
    //       });
    //   })
    //   .catch(
    //       (error) => console.log(error)
    //   );
  }
  
}
