import { NgModule } from '@angular/core';

import { SharedModule } from "../shared/shared.module";
import { HeaderComponent } from "./header/header.component"
import { HomeComponent } from "./home/home.component";
import { RecipeService } from "../recipes/recipe.service";
import { DataStorageService } from "../shared/data-storage.service";
import { AuthService } from "../auth/auth.service";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { AppRoutingModule } from "../app-routing.module";

@NgModule({
  imports: [
    SharedModule,
    AppRoutingModule
  ],
  declarations: [
  	HeaderComponent,
  	HomeComponent
  ],
  exports: [
  	HeaderComponent,
  	AppRoutingModule
  ],
  providers: [
    ShoppingListService, 
    RecipeService, 
    DataStorageService, 
    AuthService
  ]
})
export class CoreModule { }

