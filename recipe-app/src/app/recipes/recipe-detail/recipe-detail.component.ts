import { Component, 
	OnInit
	// Input 
} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

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
  recipeId: number;

  constructor(
  	private recipeService: RecipeService,
  	private route: ActivatedRoute,
  	private router: Router
  	) {}

  ngOnInit() {
  	// console.log(this.route.snapshot.params);
  	// this.currentRecipe = this.recipeService.getRecipeById(+this.route.snapshot.params["id"]);
  	this.route.params.subscribe((params: Params)=>{ 
  		this.recipeId = +params["id"];
  		this.currentRecipe = this.recipeService.getRecipeById(this.recipeId); 
  	});
  }

  onEditRecipe(){
  	this.router.navigate(['edit'], { relativeTo: this.route });
  	// this.router.navigate(['..', this.recipeId, 'edit'], { relativeTo: this.route} );
  }

  onAddToShoppingList(){
  	this.recipeService.addToShoppingList(this.currentRecipe.ingredients);
  }

  onDeleteRecipe(){
    this.recipeService.deleteRecipe(this.recipeId);
    this.router.navigate(["/recipes"]);
  }

}
