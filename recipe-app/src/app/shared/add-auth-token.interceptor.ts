import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";

import { AuthService } from "../auth/auth.service";

@Injectable()
export class AddAuthTokenInterceptor implements HttpInterceptor{

	constructor(private authService: AuthService){}

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
		console.log("Adding auth token in interceptor");
		// let clonedReq = req.clone();
		const clonedReq = req.clone({ params: req.params.set("auth", this.authService.getToken())})
		return next.handle(clonedReq);
	}

}