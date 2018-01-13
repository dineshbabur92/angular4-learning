import { NgModule } from '@angular/core';

import { Routes, RouterModule } from "@angular/router";
import { RecipesComponent } from './recipes.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { NoRecipeSelectedComponent } from "./no-recipe-selected/no-recipe-selected.component";
import { RecipeItemComponent } from "./recipe-list/recipe-item/recipe-item.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { AuthGuardService } from "../auth/auth-guard.service";

const recipesRoutes: Routes = [{ 
	"path": "", "component": RecipesComponent, "children": [
		{"path": "", "component": NoRecipeSelectedComponent, "pathMatch": "full" },
		{"path": "new", "component": RecipeEditComponent, canActivate:[AuthGuardService]},
		{"path": ":id", "component": RecipeDetailComponent},
		{"path": ":id/edit", "component": RecipeEditComponent, canActivate:[AuthGuardService]}
	]
}]

@NgModule({
  imports: [
    RouterModule.forChild(recipesRoutes)
  ],
  declarations: [],
  providers: [
  	AuthGuardService
  ],
  exports: [
  	RouterModule
  ]
})
export class RecipesRoutingModule { }
