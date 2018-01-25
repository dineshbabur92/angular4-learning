import { Component, 
  OnInit
  // OnDestroy
  // Output, 
  // EventEmitter
} from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";

// import { Recipe } from '../recipe.model';
// import { RecipeService } from '../recipe.service';
// import { Subscription } from "rxjs/Subscription";
import * as RecipesReducers from "../store/recipes.reducers";
// import * as RecipesActions from "../store/recipes.actions";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit
// , OnDestroy 
{

	// public recipes: Recipe[] = []
  // public recipeUpdateSubscription: Subscription;
  recipesState: Observable<RecipesReducers.RecipesState>;
	// @Output('onChooseRecipe') chooseRecipeEvent = new EventEmitter<Recipe>();

  constructor(
    // private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router, 
    private store: Store<RecipesReducers.FeatureState>) {}

  ngOnInit() {
    // this.recipeUpdateSubscription = this.recipeService.recipeUpdated.subscribe((recipes: Recipe[]) => {
    //   this.recipes = recipes;
    // });
    // this.recipes = this.recipeService.getRecipes();
    this.recipesState = this.store.select("recipes");
  }

  // ngOnDestroy(){
  //   // this.recipeUpdateSubscription.unsubscribe();
  // }

  onNewRecipe(){
    this.router.navigate(['new'], { relativeTo: this.route });
  }
  // onChooseRecipe(recipe: Recipe){
  // 	this.chooseRecipeEvent.emit(recipe);
  // }
}
