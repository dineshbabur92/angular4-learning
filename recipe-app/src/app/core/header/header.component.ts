import { Component, 
  OnInit 
  // Output, 
  // EventEmitter 
} from '@angular/core';
import { HttpEvent } from "@angular/common/http";
import { Response } from "@angular/http"; 

import { DataStorageService } from "../../shared/data-storage.service";
import { RecipeService } from "../../recipes/recipe.service";
import { AuthService } from "../../auth/auth.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	// @Output('goToEmitted') goToEmitter = new EventEmitter<string>();
  //check why private of authService and its use in header.component.html does not work with --prod --aot compilation
  constructor(private dataStorageService: DataStorageService,
    private recipeService: RecipeService,
    private authService: AuthService) { }

  ngOnInit() {
  }

  // goTo(page){
  // 	this.goToEmitter.emit(page);
  // }

  onSaveData(){
    // this.dataStorageService.saveRecipes().subscribe((event: HttpEvent<Object>)=>{
    //   console.log(event);
    // },(error) => console.log("Error in saving data, ", error));

    // Response does not work for progress
    // this.dataStorageService.saveRecipes().subscribe((response: Response)=>{
    //   console.log(response);
    // },(error) => console.log("Error in saving data, ", error))

    this.dataStorageService.saveRecipes().subscribe((response)=>{
      console.log(response);
    },(error) => console.log("Error in saving data, ", error))
  }

  isAuthenticated(){
    return this.authService.isAuthenticated();
  }
  onFetchData(){
    this.dataStorageService.fetchRecipes();
  }

  signout(){
    this.authService.signout();
  }


}
