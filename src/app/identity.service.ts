import { Injectable } from '@angular/core';

import { Identity } from "./identity";
import { Tools } from "./tools";

@Injectable()
export class IdentityService {

  public identity: Identity;

  constructor() {
    this.load();
  }

  save() {
    localStorage.setItem('fabriquetonusine', JSON.stringify(this.identity));
  }

  load() {
    this.identity = JSON.parse(localStorage.getItem('fabriquetonusine'));
    if (!this.identity) {
      this.identity = new Identity();
      this.save();
    }
  }

}
