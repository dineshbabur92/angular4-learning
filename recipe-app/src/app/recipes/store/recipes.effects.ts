import { Effect, Actions } from "@ngrx/effects";
import { HttpClient, HttpRequest } from "@angular/common/http";
import { Store } from "@ngrx/store";

import * as RecipesActions from "./recipes.actions";
import { Recipe } from "../recipe.model";
import * as RecipesReducers from "./recipes.reducers";

export class RecipesEffect {

	constructor(private action$: Actions, 
		private httpClient: HttpClient, 
		private store: Store<RecipesReducers.FeatureState>){}

	@Effect()
	fetchRecipes = this.action$
		.ofType(RecipesActions.FETCH_RECIPES)
		.switchMap(() => {
			return this.httpClient.get(
				"https://udemy-recipe-app-9.firebaseio.com/recipes.json",
				{
					observe: "body",
					responseType: "json"
				}
			)
		})
		.map((recipes: Recipe[]) => {
			console.log("Recipes received in map after fetch, ", recipes);
			for(let recipe of recipes){
				if(!recipe["ingredients"]){
					console.log("Adding empty ingredients to recipe, ", recipe);
					recipe["ingredients"] = [];
				}
			}
			return {
				type: RecipesActions.SET_RECIPES,
				payload: recipes
			}
		})

		@Effect({"dispatch": false})
		saveRecipes = this.action$
			.ofType(RecipesActions.SAVE_RECIPES)
			.withLatestFrom(this.store.select("recipes"))
			.switchMap(([action, state]) => {
				const req = new HttpRequest(
					"PUT", 
					"https://udemy-recipe-app-9.firebaseio.com/recipes.json",
					state.recipes,
					{
						reportProgress: true
					}
				);
				return this.httpClient.request(req);
			})

}
