import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

	currentRecipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

  //can be given as a statement in custom event binding itself, but minimize logic whereever necessary
  onChooseRecipe(recipe: Recipe){ this.currentRecipe = recipe; }

}
