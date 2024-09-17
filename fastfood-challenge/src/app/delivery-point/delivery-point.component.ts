import { Component, inject, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { Food } from '../../models/food';

@Component({
  selector: 'app-delivery-point',
  standalone: true,
  imports: [],
  templateUrl: './delivery-point.component.html',
  styleUrl: './delivery-point.component.css'
})
export class DeliveryPointComponent implements OnInit {
  private restService = inject(RestService);
  ltsRedyFood: Food[] = [];

  ngOnInit(): void {
    this.showReadyFood();
  }

  showReadyFood(){
    this.ltsRedyFood = this.restService.getReadyFood();
  }

  entregarPedido(){
    if(this.ltsRedyFood.length > 0){
      this.ltsRedyFood.shift();
      console.log('Pedido entregado');
    } else{
      alert('No hay pedidos para entregar');
    }
  }
}
