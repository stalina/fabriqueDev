import { Component, ViewEncapsulation, Input, OnInit } from '@angular/core';
import { Tools } from '../tools'
import { IdentityService } from '../identity.service';
import { CheckToolsService } from '../check-tools.service'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ToolsComponent implements OnInit {
  health = false;
  type = "danger";
  message = "Your tools doesn't work ! "
  markdown: String = '';
  @Input() public tools: Tools;
  @Input() public name: string;
  @Input() public group: string;
  ngOnInit() {
    this.health = this.isEnable(this.tools, this.identityService)
    this.http.get('assets/docs/' + this.name + '.md')
      .subscribe(res => this.markdown = res.text().replace("{{this.identityService.identity.ciDomain}}", this.identityService.identity.ciDomain))
  }
  constructor(private http: Http, private modalService: NgbModal, private checkToolsService: CheckToolsService, alertConfig: NgbAlertConfig, private identityService: IdentityService) {
    alertConfig.dismissible = false;
    this.message = "Your tools doesn't work !"
  }

  open(content) {
    this.modalService.open(content, { windowClass: 'dark-modal', size: 'lg' });
  }

  check() {
    this.checkToolsService.health(this.tools)
      .subscribe(
      health => this.toolsIsEnabled(this.tools, this.identityService),
      error => this.health = this.isEnable(this.tools, this.identityService));
  }

  private isEnable(tools: Tools, identityService: IdentityService) {
    switch (tools) {
      case Tools.GITLAB:
        return identityService.identity.scm;
      case Tools.SVN:
        return identityService.identity.scm;
      case Tools.MERCURIAL:
        return identityService.identity.scm;
      case Tools.BITBUCKET:
        return identityService.identity.scm;
      case Tools.JENKINS:
        return identityService.identity.ci;
      case Tools.BAMBOO:
        return identityService.identity.ci;
      case Tools.TEAMCITY:
        return identityService.identity.ci;
      case Tools.NEXUS:
        return identityService.identity.repo;
      case Tools.ARTIFACTORY:
        return identityService.identity.repo;
      case Tools.SYNOPIA:
        return identityService.identity.repo;
      case Tools.DOCKERHUB:
        return identityService.identity.repo;
      case Tools.RUNDECK:
        return identityService.identity.ops;
      case Tools.GOCD:
        return identityService.identity.ops;
      case Tools.NGINX:
        return identityService.identity.server;
      case Tools.APACHE:
        return identityService.identity.server;
      case Tools.TOMCAT:
        return identityService.identity.server;
      case Tools.JETTY:
        return identityService.identity.server;
      case Tools.WEBSPHERE:
        return identityService.identity.server;
      case Tools.SONAR:
        return identityService.identity.quality;
      case Tools.TEAMSCALE:
        return identityService.identity.quality;
      case Tools.MATTERMOST:
        return identityService.identity.communication;
      case Tools.ZULIP:
        return identityService.identity.communication;
      case Tools.ROCKETCHAT:
        return identityService.identity.communication;
      case Tools.WEKAN:
        return identityService.identity.organization;
      case Tools.JIRA:
        return identityService.identity.organization;
      case Tools.REDMINE:
        return identityService.identity.organization;
      case Tools.MANTIS:
        return identityService.identity.organization;
      default:
        return false;
    }
  }

  private toolsIsEnabled(tools: Tools, identityService: IdentityService) {
    switch (tools) {
      case Tools.GITLAB:
        identityService.identity.scm = true;
        break;
      case Tools.SVN:
        identityService.identity.scm = true;
        break;
      case Tools.MERCURIAL:
        identityService.identity.scm = true;
        break;
      case Tools.BITBUCKET:
        identityService.identity.scm = true;
        break;
      case Tools.JENKINS:
        identityService.identity.ci = true;
        break;
      case Tools.BAMBOO:
        identityService.identity.ci = true;
        break;
      case Tools.TEAMCITY:
        identityService.identity.ci = true;
        break;
      case Tools.NEXUS:
        identityService.identity.repo = true;
        break;
      case Tools.ARTIFACTORY:
        identityService.identity.repo = true;
        break;
      case Tools.SYNOPIA:
        identityService.identity.repo = true;
        break;
      case Tools.DOCKERHUB:
        identityService.identity.repo = true;
        break;
      case Tools.RUNDECK:
        identityService.identity.ops = true;
        break;
      case Tools.GOCD:
        identityService.identity.ops = true;
        break;
      case Tools.NGINX:
        identityService.identity.server = true;
        break;
      case Tools.APACHE:
        identityService.identity.server = true;
        break;
      case Tools.TOMCAT:
        identityService.identity.server = true;
        break;
      case Tools.JETTY:
        identityService.identity.server = true;
        break;
      case Tools.WEBSPHERE:
        identityService.identity.server = true;
        break;
      case Tools.SONAR:
        identityService.identity.quality = true;
        break;
      case Tools.TEAMSCALE:
        identityService.identity.quality = true;
        break;
      case Tools.MATTERMOST:
        identityService.identity.communication = true;
        break;
      case Tools.ZULIP:
        identityService.identity.communication = true;
        break;
      case Tools.ROCKETCHAT:
        identityService.identity.communication = true;
        break;
      case Tools.WEKAN:
        identityService.identity.organization = true;
        break;
      case Tools.JIRA:
        identityService.identity.organization = true;
        break;
      case Tools.REDMINE:
        identityService.identity.organization = true;
        break;
      case Tools.MANTIS:
        identityService.identity.organization = true;
        break;
    }

    this.health = true;
    this.type = "success"
    this.message = "Your tools works !"
    identityService.save();
  }
}