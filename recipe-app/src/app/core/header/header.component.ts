import { Component, 
  OnInit 
  // Output, 
  // EventEmitter 
} from '@angular/core';
import { HttpEvent } from "@angular/common/http";
import { Response } from "@angular/http";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";

import { DataStorageService } from "../../shared/data-storage.service";
import { RecipeService } from "../../recipes/recipe.service";
// import { AuthService } from "../../auth/auth.service";
import * as AppReducers from "../../store/app.reducers";
import * as AuthReducers from "../../auth/store/auth.reducers";
import * as AuthActions from "../../auth/store/auth.actions";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  authState: Observable<AuthReducers.AuthState>;
	// @Output('goToEmitted') goToEmitter = new EventEmitter<string>();
  //check why private of authService and its use in header.component.html does not work with --prod --aot compilation
  constructor(private dataStorageService: DataStorageService,
    private recipeService: RecipeService,
    // private authService: AuthService, 
    private store: Store<AppReducers.AppState>) { }

  ngOnInit() {
      this.authState = this.store.select("auth");
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

  // isAuthenticated(){
  //   return this.authService.isAuthenticated();
  // }
  onFetchData(){
    this.dataStorageService.fetchRecipes();
  }

  signout(){
    // this.authService.signout();
    this.store.dispatch(new AuthActions.Signout());
    // console.log(this.authState.subscribe((state: any)=> console.log(state)));
  }


}
