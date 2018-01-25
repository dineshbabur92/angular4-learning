import { Component, OnInit } from '@angular/core';

import * as firebase from "firebase";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	ngOnInit(){
	  	firebase.initializeApp({
	  		apiKey: "AIzaSyARfHf4AtaNt7o84Jx2Lt7d7_9LNeAAG4w",
	    	authDomain: "udemy-recipe-app-9.firebaseapp.com"
	  	});
	  }

  title = 'app';
  currentPage = 'recipe';

}
