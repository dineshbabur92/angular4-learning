import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

	public recipes: Recipe[] = [
		new Recipe('foo', 'foo desc', 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Recipe-575434.svg/702px-Recipe-575434.svg.png'),
		new Recipe('foo', 'foo desc', 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Recipe-575434.svg/702px-Recipe-575434.svg.png')
	];

  constructor() { }

  ngOnInit() {
  }

}
