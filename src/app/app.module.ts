import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MarkdownModule } from 'angular2-markdown';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import {IdentityService} from "./identity.service";
import {CheckToolsService} from "./check-tools.service";
import { CycleComponent } from './cycle/cycle.component';
import { ToolsComponent } from './tools/tools.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CycleComponent,
    ToolsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule,
    NgbModule.forRoot(),
    MarkdownModule.forRoot(),
  ],
  providers: [IdentityService,CheckToolsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
