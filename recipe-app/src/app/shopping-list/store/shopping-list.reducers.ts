import { Store, Action } from "@ngrx/store";

import { Ingredient } from "../../shared/ingredient.model";
import * as ShoppingListActions from "./shopping-list.actions";

export interface ShoppingListState{
	ingredients: Ingredient[];
	editedIngredient: Ingredient;
	editedIngredientIndex: number;
}

const initialState: ShoppingListState = {
	ingredients: [
		new Ingredient("apples", 5),
		new Ingredient("tomatoes", 10)
	],
	editedIngredient: null,
	editedIngredientIndex: 0
}

export function ShoppingListReducer(
	state: ShoppingListState = initialState, 
	action: ShoppingListActions.ShoppingListAction
){
	switch(action.type){
		case ShoppingListActions.ADD_INGREDIENT:
			return {
				...state,
				ingredients: [ ...state.ingredients, action.payload ]
			}
		case ShoppingListActions.ADD_INGREDIENTS:
			return {
				...state,
				ingredients: [ ...state.ingredients, ...action.payload ] 
			}
		case ShoppingListActions.UPDATE_INGREDIENT:
			const updatedIngredient = { 
				...state.ingredients[action.payload.index], 
				...action.payload.ingredient 
			};
			const ingredients = [ ...state.ingredients ];
			ingredients[action.payload.index] = updatedIngredient;
			return {
				...state,
				ingredients: ingredients
			}
		case ShoppingListActions.DELETE_INGREDIENT:
			const oldIngredients = [ ...state.ingredients ];
			oldIngredients.splice(action.payload,1);
			return {
				...state,
				ingredients: oldIngredients
			}
		default:
			return state;
	}
}