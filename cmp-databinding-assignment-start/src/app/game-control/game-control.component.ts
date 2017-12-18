import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

	count = 0;
	timer;
	@Output('countIncremented') countEmitter = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  startGame(){
  	this.timer = setInterval(()=>{ this.countEmitter.emit(++this.count) }, 1000);
  }

  stopGame(){
  	console.log("clearing timer");
  	clearInterval(this.timer);
  	this.count = 0;
  }

}
