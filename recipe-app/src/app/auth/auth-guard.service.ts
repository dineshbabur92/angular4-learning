import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Store } from "@ngrx/store";

// import { AuthService } from "./auth.service";
import * as AppReducers from "../store/app.reducers";
import * as AuthReducers from "./store/auth.reducers";

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
  	// private authService: AuthService, 
  	private store: Store<AppReducers.AppState>
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
  	// return this.authService.isAuthenticated();
  	return this.store.select("auth")
  		.take(1)
  		.map((authState: AuthReducers.AuthState) => {
  			return authState.authenticated;
  		});
  }

}
