import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RestService } from '../../services/rest.service';
import { Food } from '../../models/food';

@Component({
  selector: 'app-pos',
  standalone: true,
  imports: [CommonModule, FormsModule ],
  templateUrl: './pos.component.html',
  styleUrl: './pos.component.css'
})
export class PosComponent {
  private restService = inject(RestService);

  pedidoTomado: Food = new Food();


  sendFoot(form: NgForm) {
    if(form.valid){
      this.pedidoTomado.numero = Math.floor(Math.random() * 1000);
      this.restService.sendFood(this.pedidoTomado);
      console.log(this.pedidoTomado);
      this.pedidoTomado = new Food();
      console.log(this.restService.getFood());
    } else{
      alert("Formulario no valido");
      console.log("Formulario no valido", this.pedidoTomado);
    }
  }

}
