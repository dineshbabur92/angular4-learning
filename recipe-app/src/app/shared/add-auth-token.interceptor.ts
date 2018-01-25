import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/take";

// import { AuthService } from "../auth/auth.service";
import * as AppReducers from "../store/app.reducers";
import * as AuthReducers from "../auth/store/auth.reducers"

@Injectable()
export class AddAuthTokenInterceptor implements HttpInterceptor{

	constructor(
		// private authService: AuthService,
		private store: Store<AppReducers.AppState>){}

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
		console.log("Adding auth token in interceptor");
		// let clonedReq = req.clone();
		// const clonedReq = req.clone({ params: req.params.set("auth", this.authService.getToken())});
		// return next.handle(clonedReq);
		// const clonedReq = req.clone({ params: req.params.set("auth", this.authService.getToken())})
		return this.store.select("auth")
			.take(1)
			.switchMap((authState: AuthReducers.AuthState) => {
					console.log("inside auth token interceptor, setting token, ", authState.token);
					const clonedReq = req.clone({ params: req.params.set("auth", 
						authState.token)});
					return next.handle(clonedReq);
			});
	}

}