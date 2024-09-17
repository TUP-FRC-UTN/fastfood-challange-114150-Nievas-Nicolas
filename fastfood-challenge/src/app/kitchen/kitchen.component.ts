import { Component, inject } from '@angular/core';
import { Food } from '../../models/food';
import { RestService } from '../../services/rest.service';

@Component({
  selector: 'app-kitchen',
  standalone: true,
  imports: [],
  templateUrl: './kitchen.component.html',
  styleUrl: './kitchen.component.css'
})
export class KitchenComponent {
  private restService = inject(RestService);

  ltsFood: Food[] = [];
  btnStatus: boolean = false;
  pedido: Food = new Food();

  ngOnInit(): void {
    this.showOrders();
  }

  showOrders(){
    this.ltsFood = this.restService.getFood();
  }

  cocinar(index: number){
    this.pedido = this.ltsFood[index];
    console.log('pedido a cocinar',this.pedido);
    this.ltsFood.splice(index, 1);
    this.btnStatus = true;
  }

  pedidoTerminado() {
    if(this.pedido.numero){
      this.restService.sendReadyFood(this.pedido);
      console.log('pedido terminado',this.pedido);
      this.pedido = new Food();
      this.btnStatus = false;
    } else{
      alert('No hay pedido para entregar');
    }
  }
}
