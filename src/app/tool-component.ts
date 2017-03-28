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
        error => this.health = this.isEnable(tools, identityService));
    });
  }

  private isEnable(tools: Tools, identityService: IdentityService) {
    switch (tools) {
      case Tools.GIT:
        return identityService.identity.scm;     
      case Tools.NGINX:
        return identityService.identity.server;
      case Tools.APACHE:
        return identityService.identity.server;
      case Tools.TOMCAT:
        return identityService.identity.server;
      case Tools.WILDFIRE:
        return identityService.identity.server;
      case Tools.WEBSPHERE:
        return identityService.identity.server;
      case Tools.JENKINS:
        return identityService.identity.ci;
      case Tools.MATTERMOST:
        return identityService.identity.communication;
      case Tools.RUNDECK:
        return identityService.identity.ops;
      case Tools.WEKAN:
        return identityService.identity.organization;
      case Tools.SONAR:
        return identityService.identity.quality;
      case Tools.NEXUS:
        return identityService.identity.repo;
      default:
        return false;
    }
  }

  private toolsIsEnabled(tools: Tools, identityService: IdentityService) {
    switch (tools) {
      case Tools.GIT:
        identityService.identity.scm = true;
        break;
      case Tools.NGINX:
        identityService.identity.server = true;
        break;
      case Tools.JENKINS:
        identityService.identity.ci = true;
        break;
      case Tools.MATTERMOST:
        identityService.identity.communication = true;
        break;
      case Tools.RUNDECK:
        identityService.identity.ops = true;
        break;
      case Tools.WEKAN:
        identityService.identity.organization = true;
        break;
      case Tools.SONAR:
        identityService.identity.quality = true;
        break;
      case Tools.NEXUS:
        identityService.identity.repo = true;
        break;
    }
    this.health = true;
    identityService.save();
  }

}
