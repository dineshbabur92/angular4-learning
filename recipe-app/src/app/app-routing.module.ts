import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { NoRecipeSelectedComponent } from './recipes/no-recipe-selected/no-recipe-selected.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { SigninComponent } from "./auth/signin/signin.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { AuthGuardService } from "./auth/auth-guard.service";

const appRoutes: Routes = [
	{ "path": "", "redirectTo": "recipes", "pathMatch": "full"},
	{ "path": "recipes", "component": RecipesComponent, "children": [
		{"path": "", "component": NoRecipeSelectedComponent, "pathMatch": "full" },
		{"path": "new", "component": RecipeEditComponent, canActivate:[AuthGuardService]},
		{"path": ":id", "component": RecipeDetailComponent},
		{"path": ":id/edit", "component": RecipeEditComponent, canActivate:[AuthGuardService]}
	] },
	{ "path": "shopping-list", "component": ShoppingListComponent },
	{ "path": "signin", "component": SigninComponent },
	{ "path": "signup", "component": SignupComponent },
];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule {

}