import { Component, 
	OnInit
	// Input 
} from '@angular/core';
import { 
  ActivatedRoute, 
  Params, 
  Router 
} from '@angular/router';
import { Store } from "@ngrx/store";

import { Recipe } from '../recipe.model';
// import { RecipeService } from '../recipe.service';
import * as RecipesReducers from "../store/recipes.reducers";
import * as RecipesActions from "../store/recipes.actions";
import * as ShoppingListActions from "../../shopping-list/store/shopping-list.actions";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  // @Input() currentRecipe: Recipe;
  currentRecipe: Recipe;
  recipeId: number;

  constructor(
  	// private recipeService: RecipeService,
  	private route: ActivatedRoute,
  	private router: Router, 
    private store: Store<RecipesReducers.FeatureState>
  	) {}

  ngOnInit() {
  	// console.log(this.route.snapshot.params);
  	// this.currentRecipe = this.recipeService.getRecipeById(+this.route.snapshot.params["id"]);
  	this.route.params.subscribe((params: Params)=>{ 
  		this.recipeId = +params["id"];
  		// this.currentRecipe = this.recipeService.getRecipeById(this.recipeId);
      this.store.select("recipes").take(1).subscribe((recipeState: RecipesReducers.RecipesState) => {
        this.currentRecipe = recipeState.recipes[this.recipeId];
      })
  	});
  }

  onEditRecipe(){
  	this.router.navigate(['edit'], { relativeTo: this.route });
  	// this.router.navigate(['..', this.recipeId, 'edit'], { relativeTo: this.route} );
  }

  onAddToShoppingList(){
  	// this.recipeService.addToShoppingList(this.currentRecipe.ingredients);
    this.store.dispatch(new ShoppingListActions.AddIngredients(this.currentRecipe.ingredients));
  }

  onDeleteRecipe(){
    // this.recipeService.deleteRecipe(this.recipeId);
    this.store.dispatch(new RecipesActions.DeleteRecipe(this.recipeId));
    this.router.navigate(["/recipes"]);
  }

}
