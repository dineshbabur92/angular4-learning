import { Injectable } from "@angular/core";
import { Effect, Actions } from "@ngrx/effects";
import { fromPromise } from "rxjs/observable/fromPromise";
import { Store } from "@ngrx/store";
import { Router } from "@angular/router";

import * as AuthActions from "./auth.actions";
import * as AppReducers from "../../store/app.reducers";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/switchMap";
import * as firebase from "firebase";
import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthEffects {

	constructor(private actions$: Actions, 
		private store: Store<AppReducers.AppState>, 
		private router: Router){
	}

	@Effect()
	trySignup = this.actions$
		.ofType(AuthActions.TRY_SIGNUP)
		.map((action: AuthActions.TrySignup) => {
			return action.payload
		})
		.switchMap((payload: {email: string, password: string}) => {
			return fromPromise(
					firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
				);
		})
		.switchMap(() => {
		  return fromPromise(firebase.auth().currentUser.getToken());
		})
		.mergeMap((token: string) => {
			return [
				{ type: AuthActions.SIGNUP },
				{ type: AuthActions.SET_TOKEN, payload: token }
			]
		});

		@Effect()
		trySignin = this.actions$
		.ofType(AuthActions.TRY_SIGNIN)
		.map((action: AuthActions.TrySignin) => {
			return action.payload
		})
		.switchMap((payload: {email: string, password: string}) => {
			return fromPromise(
					firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
				);
		})
		.switchMap(() => {
		  return fromPromise(firebase.auth().currentUser.getToken());
		})
		// .catch(error => {
		// 	console.log(error);
		// 	// return Observable.empty();
		// })
		.mergeMap((token: string) => {
			console.log("token received from firebase, token, ", token);
			return [
				{ type: AuthActions.SIGNIN },
				{ type: AuthActions.SET_TOKEN, payload: token }
			]
		})

		@Effect({dispatch: false})
		signout = this.actions$
			.ofType(AuthActions.SIGNOUT)
			.do(() => {
				this.router.navigate(["/"]);
			})

}