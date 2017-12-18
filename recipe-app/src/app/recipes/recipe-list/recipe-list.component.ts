import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

	public recipes: Recipe[] = [
		new Recipe('foo', 'foo desc', 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Recipe-575434.svg/702px-Recipe-575434.svg.png'),
		new Recipe('foo1', 'foo1 desc', 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Recipe-575434.svg/702px-Recipe-575434.svg.png')
	];

	@Output('onChooseRecipe') chooseRecipeEvent = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onChooseRecipe(recipe: Recipe){
  	this.chooseRecipeEvent.emit(recipe);
  }
}
