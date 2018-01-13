import { Component, 
  OnInit 
  // Output, 
  // EventEmitter 
} from '@angular/core';
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
  constructor(private dataStorageService: DataStorageService,
    private recipeService: RecipeService,
    private authService: AuthService) { }

  ngOnInit() {
  }

  // goTo(page){
  // 	this.goToEmitter.emit(page);
  // }

  onSaveData(){
    this.dataStorageService.saveRecipes().subscribe((response: Response)=>{
      console.log(response);
    },(error) => console.log("Error in saving data, ", error))
  }

  onFetchData(){
    this.dataStorageService.fetchRecipes();
  }

  signout(){
    this.authService.signout();
  }


}
