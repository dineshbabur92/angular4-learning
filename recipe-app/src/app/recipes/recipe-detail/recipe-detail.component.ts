import { Component, 
	OnInit
	// Input 
} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  // @Input() currentRecipe: Recipe;
  currentRecipe: Recipe;

  constructor(
  	private recipeService: RecipeService,
  	private route: ActivatedRoute
  	) {}

  ngOnInit() {
  	// console.log(this.route.snapshot.params);
  	// this.currentRecipe = this.recipeService.getRecipeById(+this.route.snapshot.params["id"]);
  	this.route.params.subscribe((params: Params)=>{ this.currentRecipe = this.recipeService.getRecipeById(+params["id"]); });
  }

  onAddToShoppingList(){
  	this.recipeService.addToShoppingList(this.currentRecipe.ingredients);
  }


}
