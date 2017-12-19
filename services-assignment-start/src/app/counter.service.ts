import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {

  constructor() { }
  countActiveToInactive = 0;
  countInactiveToActive = 0;

}
