import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { RecipesComponent } from './recipes.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { NoRecipeSelectedComponent } from "./no-recipe-selected/no-recipe-selected.component";
import { RecipeItemComponent } from "./recipe-list/recipe-item/recipe-item.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipesRoutingModule } from "./recipes-routing.module";
import { SharedModule } from "../shared/shared.module";
import * as RecipesReducers from "./store/recipes.reducers";
import { RecipesEffect } from "./store/recipes.effects";

@NgModule({
  imports: [
    SharedModule,
    RecipesRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature("recipes", RecipesReducers.RecipesReducer),
    EffectsModule.forFeature([RecipesEffect])
  ],
  declarations: [
    RecipesComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeItemComponent,
    NoRecipeSelectedComponent,
    RecipeEditComponent
   ]
})
export class RecipesModule { }
