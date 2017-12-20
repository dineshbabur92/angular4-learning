import { Component, 
  OnInit, 
  Input 
  // Output, 
  // EventEmitter 
} from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

	@Input() recipe: Recipe;
	// @Output('onChooseRecipe') chooseRecipeEvent = new EventEmitter<Recipe>()

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  // onChooseRecipe(recipe: Recipe){
  onChooseRecipe(){
  	// this.chooseRecipeEvent.emit(this.recipe);
    // console.log("Recipe selected: ", this.recipe);
  	this.recipeService.recipeSelected.emit(this.recipe);
  }

}
