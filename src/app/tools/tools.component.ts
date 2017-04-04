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
      case Tools.MERCURIAL:
        return identityService.identity.scm;
      case Tools.CVS:
        return identityService.identity.scm;
      case Tools.BITBUCKET:
        return identityService.identity.scm;
      case Tools.BAZAAR:
        return identityService.identity.scm;
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
      case Tools.CRUISECONTROL:
        return identityService.identity.ci;
      case Tools.CONTINUUM:
        return identityService.identity.ci;
      case Tools.TEAMCITY:
        return identityService.identity.ci;
      case Tools.BAMBOO:
        return identityService.identity.ci;
      case Tools.CODESHIP:
        return identityService.identity.ci;
      case Tools.TRAVIS:
        return identityService.identity.ci;
      case Tools.JENKINS:
        return identityService.identity.ci;
      case Tools.MATTERMOST:
        return identityService.identity.communication;
      case Tools.MATRIX:
        return identityService.identity.communication;
      case Tools.IRC:
        return identityService.identity.communication;
      case Tools.ZULIP:
        return identityService.identity.communication;
      case Tools.CIGO:
        return identityService.identity.ops;
      case Tools.RUNDECK:
        return identityService.identity.ops;
      case Tools.TEAMFOUNDATION:
        return identityService.identity.organization;
      case Tools.TRELLO:
        return identityService.identity.organization;
      case Tools.JIRA:
        return identityService.identity.organization;
      case Tools.REDMINE:
        return identityService.identity.organization;
      case Tools.WEKAN:
        return identityService.identity.organization;
      case Tools.WEKAN:
        return identityService.identity.organization;
      case Tools.CODACY:
        return identityService.identity.quality;
      case Tools.TEAMSCALE:
        return identityService.identity.quality;
      case Tools.SQUALE:
        return identityService.identity.quality;
      case Tools.KALISTICK:
        return identityService.identity.quality;
      case Tools.METRIXWARE:
        return identityService.identity.quality;
      case Tools.CAST:
        return identityService.identity.quality;
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
      case Tools.MERCURIAL:
        identityService.identity.scm = true;
        break;
      case Tools.CVS:
        identityService.identity.scm = true;
        break;
      case Tools.BITBUCKET:
        identityService.identity.scm = true;
        break;
      case Tools.BAZAAR:
        identityService.identity.scm = true;
        break;
      case Tools.GIT:
        identityService.identity.scm = true;
        break;
      case Tools.NGINX:
        identityService.identity.server = true;
        break;
      case Tools.CRUISECONTROL:
        identityService.identity.ci = true;
        break;
      case Tools.CONTINUUM:
        identityService.identity.ci = true;
        break;
      case Tools.TEAMCITY:
        identityService.identity.ci = true;
        break;
      case Tools.BAMBOO:
        identityService.identity.ci = true;
        break;
      case Tools.CODESHIP:
        identityService.identity.ci = true;
        break;
      case Tools.TRAVIS:
        identityService.identity.ci = true;
        break;
      case Tools.JENKINS:
        identityService.identity.ci = true;
        break;
      case Tools.MATRIX:
        identityService.identity.communication = true;
        break;
      case Tools.IRC:
        identityService.identity.communication = true;
        break;
      case Tools.ZULIP:
        identityService.identity.communication = true;
        break;
      case Tools.MATTERMOST:
        identityService.identity.communication = true;
        break;
      case Tools.MATRIX:
        identityService.identity.communication = true;
        break;
      case Tools.IRC:
        identityService.identity.communication = true;
        break;
      case Tools.ZULIP:
        identityService.identity.communication = true;
        break;
      case Tools.CIGO:
        identityService.identity.ops = true;
        break;
      case Tools.RUNDECK:
        identityService.identity.ops = true;
        break;
      case Tools.TEAMFOUNDATION:
        identityService.identity.organization = true;
        break;
      case Tools.TRELLO:
        identityService.identity.organization = true;
        break;
      case Tools.JIRA:
        identityService.identity.organization = true;
        break;
      case Tools.REDMINE:
        identityService.identity.organization = true;
        break;
      case Tools.WEKAN:
        identityService.identity.organization = true;
        break;
      case Tools.CODACY:
        identityService.identity.quality = true;
        break;
      case Tools.TEAMSCALE:
        identityService.identity.quality = true;
        break;
      case Tools.SQUALE:
        identityService.identity.quality = true;
        break;
      case Tools.KALISTICK:
        identityService.identity.quality = true;
        break;
      case Tools.METRIXWARE:
        identityService.identity.quality = true;
        break;
      case Tools.CAST:
        identityService.identity.quality = true;
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