

import { Recipe } from "../recipe.model";
import { Ingredient } from "../../shared/ingredient.model";
import * as RecipesActions from "./recipes.actions";

export interface RecipesState{
	recipes: Recipe[];
}

const initialState: RecipesState = {
	recipes: [
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
	]
} 

export function RecipesReducer(state: RecipesState = initialState, action: RecipesActions.RecipesAction){

}