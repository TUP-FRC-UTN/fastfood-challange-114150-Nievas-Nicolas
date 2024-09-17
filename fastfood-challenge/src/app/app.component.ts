import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PosComponent } from './pos/pos.component';
import { RestService } from '../services/rest.service';
import { Food } from '../models/food';
import { KitchenComponent } from "./kitchen/kitchen.component";
import { DeliveryPointComponent } from "./delivery-point/delivery-point.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PosComponent, KitchenComponent, DeliveryPointComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'fastfood-challenge';
  ltsFood: Food[] = [];

  private restService = inject(RestService);

  ngOnInit(): void {
    this.showOrders();
  }

  showOrders(){
    this.ltsFood = this.restService.getFood();
  }
}
