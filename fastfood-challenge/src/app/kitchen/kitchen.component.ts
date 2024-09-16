import { Component, inject } from '@angular/core';
import { Foot } from '../models/foot';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-kitchen',
  standalone: true,
  imports: [],
  templateUrl: './kitchen.component.html',
  styleUrl: './kitchen.component.css'
})
export class KitchenComponent {
  private restService = inject(RestService);

  ltsFoot: Foot[] = [];
  btnStatus: boolean = false;
  foot: Foot = new Foot();

  ngOnInit(): void {
    this.showOrders();
  }

  showOrders(){
    this.ltsFoot = this.restService.getFoot();
  }

  cocinar(foot: Foot){
    if(!this.ltsFoot){
      this.ltsFoot = [];
    
      this.btnStatus = true;
    }
  }
}
