import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgbTabsetConfig } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Rx';
import { CheckToolsService } from './check-tools.service'
import { Tools } from './tools'
import { IdentityService } from './identity.service';
import { Identity } from './identity'

export class ToolComponent {
  health = false;

  constructor(checkToolsService: CheckToolsService, identityService: IdentityService, tools: Tools) {
    this.health = this.isEnable(tools, identityService)
    Observable.interval(10000).subscribe(x => {
      checkToolsService.health(tools)
        .subscribe(
        health => this.toolsIsEnabled(tools, identityService),
        error => this.health = false);
    });
  }

  private isEnable(tools: Tools, identityService: IdentityService) {
    switch (tools) {
      case Tools.GIT:
        return identityService.identity.scm;
      default:
        return false;
    }
  }

  private toolsIsEnabled(tools: Tools, identityService: IdentityService) {
    switch (tools) {
      case Tools.GIT:
        identityService.identity.scm = true;
        break;
    }
    this.health = true;
    identityService.save();
  }

}
