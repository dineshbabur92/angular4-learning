import { Component, 
	OnInit, 
	ViewChild, 
	ElementRef,
  OnDestroy
	// EventEmitter,
	// Output 
} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

	// @ViewChild('nameInput') nameInputRef: ElementRef;
	// @ViewChild('amountInput') amountInputRef: ElementRef;
	// @Output('onAddIngredient') addIngredientEvent = new EventEmitter<Ingredient>();

  @ViewChild("f") form: NgForm;
  updateSubscription: Subscription;

  editMode: boolean = false;
  editIngredient: Ingredient;
  editIndex: number;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.updateSubscription = this.shoppingListService.updateIngredient.subscribe((i: number) => {
      this.editIndex = i;
      this.editIngredient = this.shoppingListService.getIngredient(i);
      this.editMode = true;
      this.form.setValue({
        "name": this.editIngredient.name,
        "amount": this.editIngredient.amount
      })
    });
  }

  ngOnDestroy(){
    this.updateSubscription.unsubscribe();
  }

  onAddIngredient(form: NgForm){
  	// const ingName = this.nameInputRef.nativeElement.value;
  	// const ingAmount = this.amountInputRef.nativeElement.value;
  	// const ingredient = new Ingredient(form.value.ingName, form.value.ingAmount);
    const ingredient = new Ingredient(form.value.name, form.value.amount);
    if(this.editMode)
      this.shoppingListService.onUpdateIngredient(this.editIndex, ingredient);
    else 
  	  this.shoppingListService.onAddIngredient(ingredient);
    this.onClear();
  }

  onClear(){
    this.form.reset();
    this.editMode = false;
  }

  onDelete(){
    this.shoppingListService.onDeleteIngredient(this.editIndex);
    this.onClear();
  }

}
