import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { ShoppingListComponent } from "./shopping-list.component";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";

@NgModule({
  imports: [
    FormsModule,
    CommonModule
  ],
  declarations: [
  	ShoppingListComponent,
  	ShoppingEditComponent	
  ]
})
export class ShoppingListModule { }
