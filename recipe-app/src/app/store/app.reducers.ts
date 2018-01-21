import { ActionReducerMap } from "@ngrx/store";

import * as ShoppingListReducers from "../shopping-list/store/shopping-list.reducers";
import * as AuthReducers from "../auth/store/auth.reducers";

export interface AppState {
	shoppingList: ShoppingListReducers.ShoppingListState,
	auth: AuthReducers.AuthState
}

export const reducers: ActionReducerMap<AppState> = {
	shoppingList: ShoppingListReducers.ShoppingListReducer,
	auth: AuthReducers.AuthReducer
}