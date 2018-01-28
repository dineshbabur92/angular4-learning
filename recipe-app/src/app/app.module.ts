import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreRouterConnectingModule } from "@ngrx/router-store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

import { AppComponent } from './app.component';
import { ShoppingListModule } from "./shopping-list/shopping-list.module";
import { RecipesModule } from "./recipes/recipes.module";
import { AuthModule } from "./auth/auth.module";
import { CoreModule } from "./core/core.module";
import { AppRoutingModule } from "./app-routing.module";
import { reducers } from "./store/app.reducers";
import { AuthEffects } from "./auth/store/auth.effects";
import { environment } from "../environments/environment";
// import * as ShoppingListReducers from "./shopping-list/store/shopping-list.reducers";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ShoppingListModule,
    AuthModule,
    CoreModule,
    StoreModule.forRoot(reducers), 
    EffectsModule.forRoot([AuthEffects]),
    StoreRouterConnectingModule,
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


