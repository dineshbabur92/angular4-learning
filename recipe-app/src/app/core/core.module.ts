import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from "@angular/common/http";

import { SharedModule } from "../shared/shared.module";
import { HeaderComponent } from "./header/header.component"
import { HomeComponent } from "./home/home.component";
import { RecipeService } from "../recipes/recipe.service";
import { DataStorageService } from "../shared/data-storage.service";
import { AuthService } from "../auth/auth.service";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { AppRoutingModule } from "../app-routing.module";
import { AddAuthTokenInterceptor } from "../shared/add-auth-token.interceptor";
import { LoggingInterceptor } from "../shared/logging.interceptor";

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
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: AddAuthTokenInterceptor, multi: true},
    { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true}
  ]
})
export class CoreModule { }

