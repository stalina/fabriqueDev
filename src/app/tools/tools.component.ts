import { Component, Input, OnInit } from '@angular/core';
import { Tools } from '../tools'
import { IdentityService } from '../identity.service';
import { CheckToolsService } from '../check-tools.service'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent implements OnInit {
  health = false;

  @Input() public tools: Tools;
  @Input() public name: string;
  ngOnInit() {
    this.health = this.isEnable(this.tools, this.identityService)
    Observable.interval(10000).subscribe(x => {
      this.checkToolsService.health(this.tools)
        .subscribe(
        health => this.toolsIsEnabled(this.tools, this.identityService),
        error => this.health = this.isEnable(this.tools, this.identityService));
    });
  }
  constructor(private modalService: NgbModal, private checkToolsService: CheckToolsService, private identityService: IdentityService) {

  }

  open(content) {
    this.modalService.open(content);
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
      case Tools.ARTEFACTORY:
        return identityService.identity.repo;
      case Tools.NPM:
        return identityService.identity.repo;
      case Tools.DOCKERHUB:
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
      case Tools.ARTEFACTORY:
        identityService.identity.repo = true;
        break;
      case Tools.NPM:
        identityService.identity.repo = true;
        break;
      case Tools.DOCKERHUB:
        identityService.identity.repo = true;
        break;
    }
    this.health = true;
    identityService.save();
  }
}