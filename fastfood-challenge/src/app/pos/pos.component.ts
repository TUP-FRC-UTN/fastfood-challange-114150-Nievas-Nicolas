import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RestService } from '../services/rest.service';
import { Foot } from '../models/foot';

@Component({
  selector: 'app-pos',
  standalone: true,
  imports: [CommonModule, FormsModule ],
  templateUrl: './pos.component.html',
  styleUrl: './pos.component.css'
})
export class PosComponent {
  private restService = inject(RestService);

  pedidoTomado: Foot = new Foot();


  sendFoot(form: NgForm) {
    if(form.valid){
      this.pedidoTomado.numero = Math.floor(Math.random() * 1000);
      this.restService.sendFoot(this.pedidoTomado);
      this.pedidoTomado = new Foot();
      console.log(this.pedidoTomado);
      console.log(this.restService.getFoot());
    } else{
      alert("Formulario no valido");
      console.log("Formulario no valido", this.pedidoTomado);
    }
  }

}
