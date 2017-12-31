import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { FormGroup, Validators, FormControl, FormArray } from "@angular/forms";
import { Recipe } from "../recipe.model";
import { RecipeService } from "../recipe.service";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

	recipeId: number;
	editMode: boolean = false;
  recipeEditForm: FormGroup;
  editRecipe: Recipe;

  constructor(private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router) { }

  ngOnInit() {
  	this.route.params.subscribe(
  		(params: Params) => { 
    		this.recipeId = params["id"]; 
    		this.editMode = params["id"]!=null; 
        this.editRecipe = this.recipeService.getRecipeById(this.recipeId);
    		//console.log("Edit for Id: ", this.recipeId, ", editMode: ", this.editMode);
  		}
  	);
    this.initForm();
  }

  private initForm(){


    let name: string;
    let desc: string;
    let imageSrc: string;
    let ingredients: FormArray = new FormArray([]);

    if(this.editMode){
      name = this.editRecipe.name;
      desc = this.editRecipe.desc;
      imageSrc = this.editRecipe.imageSrc;
      if(this.editRecipe.ingredients){
        console.log("ingredients in this edit recipe", this.editRecipe.ingredients);
        for(let ingredient of this.editRecipe.ingredients){
          console.log("inside loop of ingredients", ingredient);
          ingredients.push(new FormGroup({
            "name": new FormControl(ingredient.name, Validators.required),
            "amount": new FormControl(ingredient.amount, [Validators.required,
              Validators.pattern(/^[1-9]+[0-9]*/)])
          }));
        }
      }
    }

    this.recipeEditForm = new FormGroup({
      "name": new FormControl(name, Validators.required),
      "desc": new FormControl(desc, Validators.required),
      "imageSrc": new FormControl(imageSrc, Validators.required),
      "ingredients": ingredients
    });

  }

  onSubmit(){
    console.log(this.recipeEditForm.value);
    if(this.editMode){
      this.recipeService.updateRecipe(this.recipeId, this.recipeEditForm.value);
      this.onCancel();
      return;
    }
    this.recipeService.addRecipe(this.recipeEditForm.value);
    this.onCancel();
  }

  onAddIngredient(){
    (<FormArray>this.recipeEditForm.get("ingredients")).push(new FormGroup({
      "name": new FormControl(null, Validators.required),
      "amount": new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*/)])
    }));
  }

  onDeleteIngredient(index: number){
    (<FormArray>this.recipeEditForm.get("ingredients")).removeAt(index);
  }

  onCancel(){
    this.router.navigate([".."], {"relativeTo": this.route})
  }

}
