import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import "rxjs/Rx";

import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";

@Injectable()
export class DataStorageService{
	
	constructor(private http: Http,
		private recipeService: RecipeService){

	}
	saveRecipes(){
		return this.http.put("https://udemy-recipe-app-6617d.firebaseio.com/recipes.json", 
			this.recipeService.getRecipes());
	}
	fetchRecipes(){
		this.http.get("https://udemy-recipe-app-6617d.firebaseio.com/recipes.json").map(
				(response: Response) => {
					const recipes: Recipe[] = response.json();
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