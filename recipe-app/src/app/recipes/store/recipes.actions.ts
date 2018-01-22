import { Action } from "@ngrx/store";

import { Recipe } from "../recipe.model";

export const SET_RECIPES = "SET_RECIPES";
export const FETCH_RECIPES = "FETCH_RECIPES";
export const SAVE_RECIPES = "SAVE_RECIPES";
export const ADD_RECIPE = "ADD_RECIPE";
export const UPDATE_RECIPE = "UPDATE_RECIPE";

export class SetRecipes implements Action {

	readonly type = SET_RECIPES;
	constructor(public payload: Recipe[]){}

}

export class FetchRecipes implements Action {

	readonly type = FETCH_RECIPES;
	constructor(public payload: Recipe[]){}

}

export class SaveRecipes implements Action {

	readonly type = SAVE_RECIPES;
	constructor(public payload: Recipe[]){}

}

export class AddRecipe implements Action {

	readonly type = ADD_RECIPE;
	constructor(public payload: Recipe[]){}

}

export class UpdateRecipe implements Action {

	readonly type = UPDATE_RECIPE;
	constructor(public payload: { index: number, recipe: Recipe }){}

}
