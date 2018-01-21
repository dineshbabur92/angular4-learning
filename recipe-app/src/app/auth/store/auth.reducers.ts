
import * as AuthActions from "./auth.actions";

export interface AuthState {
	token: string;
	authenticated: boolean;
}

const initialState: AuthState = {
	token: null,
	authenticated: false
}

export function AuthReducer(state: AuthState = initialState, action: AuthActions.AuthAction) {
	switch (action.type) {
		case AuthActions.SIGNIN:
		case AuthActions.SIGNUP:
			return {
				...state,
				authenticated: true
			}
			// code...
		case AuthActions.SIGNOUT:
			return {
				...state,
				...initialState	
			}
		case AuthActions.SET_TOKEN:
			return {
				...state,
				token: action.payload
			}
		default:
			return {
				...state
			}
	}
}