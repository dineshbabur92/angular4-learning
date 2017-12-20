import { Ingredient } from '../shared/ingredient.model';

export class Recipe {
	public name: string;
	public desc: string;
	public imageSrc: string;
	public ingredients: Ingredient[];

	constructor(name: string, desc: string, imageSrc: string, ingredients: Ingredient[]){

		this.name = name;
		this.desc = desc;
		this.imageSrc = imageSrc;
		this.ingredients = ingredients;

	}
}