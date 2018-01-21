import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
// import { ShoppingListService } from './shopping-list.service';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";

import { Subscription } from 'rxjs/Subscription';
import * as AppReducers from "../store/app.reducers";
import * as ShoppingListActions from "./store/shopping-list.actions";
import * as ShoppingListReducers from "./store/shopping-list.reducers";

@Component({
	selector: "app-shopping-list",
	templateUrl: "./shopping-list.component.html",
	styles: ["./shopping-list.component.css"]
})
export class ShoppingListComponent implements OnInit, OnDestroy{

	ingredients: Ingredient[] = [];
	private subscription: Subscription;
	private shoppingListState: Observable<ShoppingListReducers.ShoppingListState>; 

	constructor(
		// private shoppingListService: ShoppingListService,
		private store: Store<AppReducers.AppState>){

	}

	ngOnDestroy(){
		// this.subscription.unsubscribe();
	}

	ngOnInit(){
		// this.ingredients = this.shoppingListService.getIngredients();
		// this.subscription = this.shoppingListService.ingredientsChanged.subscribe( 
		// 	(ingredients: Ingredient[]) => this.ingredients = ingredients 
		// );
		console.log(this.store);
		console.log(this.store.select("shoppingList"));
		this.shoppingListState = this.store.select("shoppingList");
	}

	onEditIngredient(i: number){
		// this.shoppingListService.updateIngredient.next(i);
		this.store.dispatch(new ShoppingListActions.StartEditIngredient(i));
	}

}