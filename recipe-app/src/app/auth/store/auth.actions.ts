import { Action } from "@ngrx/store";

export const SIGNIN = "SIGNIN";
export const SIGNUP = "SIGNUP";
export const SIGNOUT = "SINGOUT";
export const TRY_SIGNIN = "TRY_SIGNIN";
export const TRY_SIGNUP = "TRY_SIGNUP";
export const SET_TOKEN = "SET_TOKEN";

export class Signin implements Action{
	readonly type = SIGNIN;
	// constructor(public payload: { email: string, password: string }){}
}

export class Signup implements Action{
	readonly type = SIGNUP;
	// constructor(public payload: { email: string, password: string }){}
}

export class Signout implements Action{
	readonly type = SIGNOUT;
	constructor(){}
}

export class SetToken implements Action{
	readonly type = SET_TOKEN;
	constructor(public payload: string){}
}

export class TrySignin implements Action{
	readonly type = TRY_SIGNIN;
	constructor(public payload: { email: string, password: string }){}
}

export class TrySignup implements Action{
	readonly type = TRY_SIGNUP;
	constructor(public payload: { email: string, password: string }){}
}

export type AuthAction = 
	TrySignin
	| TrySignup
	| Signin
	| Signup
	| Signout
	| SetToken

