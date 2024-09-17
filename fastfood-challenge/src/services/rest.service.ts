import { Injectable } from '@angular/core';
import { Food } from '../models/food';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  private ltsFood: Food[] = [];
  private ltsReadyFood: Food[] = [];

  sendFood(food: Food) {
    this.ltsFood.push(food);
  }

  getFood(){
    return this.ltsFood;
  }

  sendReadyFood(food: Food) {
    this.ltsReadyFood.push(food);
  }

  getReadyFood(){
    return this.ltsReadyFood;
  }

  constructor() { }
}
