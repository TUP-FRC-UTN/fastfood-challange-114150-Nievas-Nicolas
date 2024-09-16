import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PosComponent } from './pos/pos.component';
import { RestService } from './services/rest.service';
import { Foot } from './models/foot';
import { KitchenComponent } from "./kitchen/kitchen.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PosComponent, KitchenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'fastfood-challenge';
  ltsFoot: Foot[] = [];

  private restService = inject(RestService);

  ngOnInit(): void {
    this.showOrders();
  }

  showOrders(){
    this.ltsFoot = this.restService.getFoot();
  }
}
