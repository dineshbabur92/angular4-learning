import { Component, OnInit } from '@angular/core';
// import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {

  // currentRecipe: Recipe;

  // constructor(private recipeService: RecipeService) { }

  ngOnInit() {

  	// this.recipeService.recipeSelected.subscribe( (recipe: Recipe) => {
  	// 	// console.log("Recipe selection received: ", recipe);
  	// 	this.currentRecipe = recipe;
  	// });

  }

  //can be given as a statement in custom event binding itself, but minimize logic whereever necessary
  // onChooseRecipe(recipe: Recipe){ this.currentRecipe = recipe; }

}
