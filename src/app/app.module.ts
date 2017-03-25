import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { GitComponent } from './git/git.component';
import { HomeComponent } from './home/home.component';

import {IdentityService} from "./identity.service";
import {CheckToolsService} from "./check-tools.service";
import { JenkinsComponent } from './jenkins/jenkins.component';
import { NexusComponent } from './nexus/nexus.component';
import { RundeckComponent } from './rundeck/rundeck.component';
import { NginxComponent } from './nginx/nginx.component';
import { SonarComponent } from './sonar/sonar.component';
import { WekanComponent } from './wekan/wekan.component';
import { MattermostComponent } from './mattermost/mattermost.component';
import { MercurialComponent } from './mercurial/mercurial.component';
import { CvsComponent } from './cvs/cvs.component';
import { BitbucketComponent } from './bitbucket/bitbucket.component';
import { BazaarComponent } from './bazaar/bazaar.component';
import { TravisComponent } from './travis/travis.component';
import { SvnComponent } from './svn/svn.component';
import { BambooComponent } from './bamboo/bamboo.component';
import { CodeshipComponent } from './codeship/codeship.component';
import { TeamcityComponent } from './teamcity/teamcity.component';
import { ContinuumComponent } from './continuum/continuum.component';
import { CruisecontrolComponent } from './cruisecontrol/cruisecontrol.component';
import { ArtefactoryComponent } from './artefactory/artefactory.component';
import { NpmComponent } from './npm/npm.component';
import { DockerhubComponent } from './dockerhub/dockerhub.component';
import { CigoComponent } from './cigo/cigo.component';
import { ApacheComponent } from './apache/apache.component';
import { TomcatComponent } from './tomcat/tomcat.component';
import { WildfireComponent } from './wildfire/wildfire.component';
import { WebsphereComponent } from './websphere/websphere.component';
import { CodacyComponent } from './codacy/codacy.component';
import { TeamscaleComponent } from './teamscale/teamscale.component';
import { SqualeComponent } from './squale/squale.component';
import { KalistickComponent } from './kalistick/kalistick.component';
import { MetrixWareComponent } from './metrix-ware/metrix-ware.component';
import { CastComponent } from './cast/cast.component';
import { TeamfoundationComponent } from './teamfoundation/teamfoundation.component';
import { TrelloComponent } from './trello/trello.component';
import { JiraComponent } from './jira/jira.component';
import { RedmineComponent } from './redmine/redmine.component';
import { ZulipComponent } from './zulip/zulip.component';
import { IrcComponent } from './irc/irc.component';
import { MatrixComponent } from './matrix/matrix.component';

@NgModule({
  declarations: [
    AppComponent,
    GitComponent,
    HomeComponent,
    JenkinsComponent,
    NexusComponent,
    RundeckComponent,
    NginxComponent,
    SonarComponent,
    WekanComponent,
    MattermostComponent,
    MercurialComponent,
    CvsComponent,
    BitbucketComponent,
    BazaarComponent,
    TravisComponent,
    SvnComponent,
    BambooComponent,
    CodeshipComponent,
    TeamcityComponent,
    ContinuumComponent,
    CruisecontrolComponent,
    ArtefactoryComponent,
    NpmComponent,
    DockerhubComponent,
    CigoComponent,
    ApacheComponent,
    TomcatComponent,
    WildfireComponent,
    WebsphereComponent,
    CodacyComponent,
    TeamscaleComponent,
    SqualeComponent,
    KalistickComponent,
    MetrixWareComponent,
    CastComponent,
    TeamfoundationComponent,
    TrelloComponent,
    JiraComponent,
    RedmineComponent,
    ZulipComponent,
    IrcComponent,
    MatrixComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule,
    NgbModule.forRoot()
  ],
  providers: [IdentityService,CheckToolsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
