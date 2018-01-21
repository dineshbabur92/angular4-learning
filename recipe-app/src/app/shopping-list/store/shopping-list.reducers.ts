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
	editedIngredientIndex: -1
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
				ingredients: ingredients,
				editedIngredientIndex: initialState.editedIngredientIndex,
				editedIngredient: initialState.editedIngredient
			}
		case ShoppingListActions.DELETE_INGREDIENT:
			const oldIngredients = [ ...state.ingredients ];
			oldIngredients.splice(action.payload,1);
			return {
				...state,
				ingredients: oldIngredients,
				editedIngredientIndex: initialState.editedIngredientIndex,
				editedIngredient: initialState.editedIngredient
			}
		case ShoppingListActions.START_EDIT_INGREDIENT:
			return {
				...state,
				editedIngredient: { ...state.ingredients[action.payload] },
				editedIngredientIndex: action.payload
			}
		case ShoppingListActions.RESET:
			return {
					...initialState,
					ingredients: [ ...state.ingredients ]
			}
		default:
			return state;
	}
}