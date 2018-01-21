import { ActionReducerMap } from "@ngrx/store";
import * as ShoppingListReducers from "../shopping-list/store/shopping-list.reducers";

export interface AppState{
	shoppingList: ShoppingListReducers.ShoppingListState
}

export const reducersMap: ActionReducerMap<AppState> = {
	shoppingList: ShoppingListReducers.ShoppingListReducer
}