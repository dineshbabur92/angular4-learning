// import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

import { Subject } from "rxjs/Subject";

export class ShoppingListService {

	// ingredientsChanged = new EventEmitter<Ingredient[]>();
	ingredientsChanged = new Subject<Ingredient[]>()
	updateIngredient: Subject<number> = new Subject<number>();

	ingredients: Ingredient[] = [
		new Ingredient("apples", 5),
		new Ingredient("tomatoes", 10)
	];

	getIngredients(){
		return this.ingredients.slice();
	}

	getIngredient(index: number){
		return this.ingredients[index];
	}

	onDeleteIngredient(index: number){
		this.ingredients.splice(index, 1);
		this.ingredientsChanged.next(this.ingredients.slice());
	}

	onUpdateIngredient(index: number, ingredient: Ingredient){
		this.ingredients[index] = ingredient;
		this.ingredientsChanged.next(this.ingredients.slice());
	}

	onAddIngredient(ingredient: Ingredient){
		this.ingredients.push(ingredient);
		this.ingredientsChanged.next(this.ingredients.slice());
	}

	addIngredients(ingredients: Ingredient[]){
		// for(let ingredient of ingredients){
		// 	this.onAddIngredient(ingredient.name, ingredient.amount);
		// }
		this.ingredients.push(...ingredients);
		this.ingredientsChanged.next(this.ingredients.slice());
	}

}