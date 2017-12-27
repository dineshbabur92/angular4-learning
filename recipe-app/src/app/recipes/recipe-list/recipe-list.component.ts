import { Component, 
  OnInit
  // Output, 
  // EventEmitter
} from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

	public recipes: Recipe[] = []

	// @Output('onChooseRecipe') chooseRecipeEvent = new EventEmitter<Recipe>();

  constructor(private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe(){
    this.router.navigate(['new'], { relativeTo: this.route });
  }
  // onChooseRecipe(recipe: Recipe){
  // 	this.chooseRecipeEvent.emit(recipe);
  // }
}
