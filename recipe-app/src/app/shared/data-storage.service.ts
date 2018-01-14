import { Injectable } from "@angular/core";
// import { Http, Response } from "@angular/http";
import "rxjs/Rx";

import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";
import { AuthService } from "../auth/auth.service";
import { HttpClient, HttpParams, HttpRequest } from "@angular/common/http";

@Injectable()
export class DataStorageService{
	
	constructor(private httpClient: HttpClient,
		private recipeService: RecipeService,
		private authService: AuthService){

	}
	saveRecipes(){
		// return this.httpClient.put(
		// 		"https://udemy-recipe-app-9.firebaseio.com/recipes.json",
		// 		this.recipeService.getRecipes(),
		// 		{
		// 			params: new HttpParams().set("auth", this.authService.getToken()),
		// 			observe: "events"
		// 		}
		// )

		const req = new HttpRequest(
			"PUT", 
			"https://udemy-recipe-app-9.firebaseio.com/recipes.json",
			this.recipeService.getRecipes(),
			{
				// params: new HttpParams().set("auth", this.authService.getToken()),
				// observe: "events",
				reportProgress: true
			}
		);
		return this.httpClient.request(req);
	}
	fetchRecipes(){
		this.httpClient.get(
				"https://udemy-recipe-app-9.firebaseio.com/recipes.json",
				{
					// params: new HttpParams().set("auth", this.authService.getToken()),
					observe: "body",
					responseType: "json"
				}

			).map(
				(recipes: Recipe[]) => {
					// const recipes: Recipe[] = response.json();
					console.log("Recipes received in map after fetch, ", recipes);
					for(let recipe of recipes){
						if(!recipe["ingredients"]){
							console.log("Adding empty ingredients to recipe, ", recipe);
							recipe["ingredients"] = [];
						}
					}
					return recipes;
				}
			).subscribe(
				(recipes: Recipe[]) => {
					this.recipeService.setRecipes(recipes);
				}
			)
	}

}