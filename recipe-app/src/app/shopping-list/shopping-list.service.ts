import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {

	ingredientsChanged = new EventEmitter<Ingredient[]>();

	ingredients: Ingredient[] = [
		new Ingredient("apples", 5),
		new Ingredient("tomatoes", 10)
	];

	getIngredients(){
		return this.ingredients.slice();
	}

	onAddIngredient(ingredient: Ingredient){
		this.ingredients.push(ingredient);
		this.ingredientsChanged.emit(this.ingredients.slice());
	}

	addIngredients(ingredients: Ingredient[]){
		// for(let ingredient of ingredients){
		// 	this.onAddIngredient(ingredient.name, ingredient.amount);
		// }
		this.ingredients.push(...ingredients);
		this.ingredientsChanged.emit(this.ingredients.slice());
	}

}