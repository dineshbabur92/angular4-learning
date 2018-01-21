import { Action } from "@ngrx/store";

import { Ingredient } from "../../shared/ingredient.model";

export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const ADD_INGREDIENTS = "ADD_INGREDIENTS";
export const UPDATE_INGREDIENT = "UPDATE_INGREDIENT";
export const DELETE_INGREDIENT = "DELETE_INGREDIENT";
export const START_EDIT_INGREDIENT = "START_EDIT_INGREDIENT";
export const RESET = "RESET";

export class AddIngredient implements Action{

	readonly type = ADD_INGREDIENT;
	constructor(public payload: Ingredient){

	}

}

export class AddIngredients implements Action{

	readonly type = ADD_INGREDIENTS;
	constructor(public payload: Ingredient[]){

	}

}

export class UpdateIngredient implements Action{

	readonly type = UPDATE_INGREDIENT;
	constructor(public payload: { index: number, ingredient: Ingredient }){

	}

}

export class DeleteIngredient implements Action{

	readonly type = DELETE_INGREDIENT;
	constructor(public payload: number){

	}

}

export class StartEditIngredient implements Action{

	readonly type = START_EDIT_INGREDIENT;
	constructor(public payload: number){

	}

}

export class Reset implements Action{

	readonly type = RESET;

}

export type ShoppingListAction = 
	AddIngredient 
	| AddIngredients 
	| UpdateIngredient 
	| DeleteIngredient
	| StartEditIngredient
	| Reset;
