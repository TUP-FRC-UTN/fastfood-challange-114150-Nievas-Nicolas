import { Injectable } from '@angular/core';
import { Foot } from '../models/foot';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  private ltsFoot: Foot[] = [];

  sendFoot(foot: Foot) {
    this.ltsFoot.push(foot);
  }

  getFoot(){
    return this.ltsFoot;
  }

  constructor() { }
}
