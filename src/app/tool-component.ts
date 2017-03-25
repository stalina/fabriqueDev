import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgbTabsetConfig } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Rx';
import { CheckToolsService } from './check-tools.service'
import { Tools } from './tools'

export class ToolComponent {
  health = false;

  constructor(checkToolsService: CheckToolsService,tools: Tools) {
    Observable.interval(10000).subscribe(x => {
      checkToolsService.health(tools)
        .subscribe(
        health => this.health = true,
        error => this.health = false);
    });
  }


}
