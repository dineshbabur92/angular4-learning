import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from "rxjs/Subject";

@Injectable()
export class RecipeService {

	constructor(private slService: ShoppingListService){}
	// recipeSelected = new EventEmitter<Recipe>();
	recipeUpdated: Subject<Recipe[]> = new Subject<Recipe[]>();

	private recipes: Recipe[] = [
		new Recipe(
			'Rasam', 
			'Rasam, chaaru, saaru or kabir is a South Indian soup, traditionally prepared using tamarind juice as a base, with the addition of tomato, chili pepper, pepper, cumin and other spices as seasonings.', 
			'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Rasam.JPG/200px-Rasam.JPG',
			[
				new Ingredient('tomatoes', 5),
				new Ingredient('Something Else', 5)
			]
		),
		new Recipe(
			'Sambar', 
			'Sambar, also spelled sambhar or sambaar, is a lentil-based vegetable stew or chowder cooked with a tamarind broth originating from the Indian subcontinent.', 
			'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Indian_Sambar.jpg/250px-Indian_Sambar.jpg',
			[
				new Ingredient('Thoor Dhaal', 1),
				new Ingredient('Something Else', 5)
			]
		)
	];

	getRecipes(){
		return this.recipes.slice();
	}

	setRecipes(recipes: Recipe[]){
		console.log("fetched recipes, ", recipes);
		this.recipes = recipes;
		this.recipeUpdated.next(this.recipes.slice());
	}

	addToShoppingList(ingredients: Ingredient[]){
		this.slService.addIngredients(ingredients);
	}

	getRecipeById(id: number){
		return this.recipes[id];
	}

	updateRecipe(index: number, recipe: Recipe){
		this.recipes[index] = recipe;
		this.recipeUpdated.next(this.recipes.slice());
	}

	addRecipe(recipe: Recipe){
		this.recipes.push(recipe);
		this.recipeUpdated.next(this.recipes.slice());
	}

	deleteRecipe(index: number){
		this.recipes.splice(index, 1);
		this.recipeUpdated.next(this.recipes.slice());
	}
}