import {Injectable} from '@angular/core';

import {Identity} from "./identity";

@Injectable()
export class IdentityService {

  public identity: Identity;

  constructor() {
    this.load();
  }

  save() {
    localStorage.setItem('fabriquetonci', JSON.stringify(this.identity));
  }

  load() {
    this.identity = JSON.parse(localStorage.getItem('fabriquetonci'));
    if(!this.identity){
      this.identity = new Identity();
      this.save();
    }
  }

}
