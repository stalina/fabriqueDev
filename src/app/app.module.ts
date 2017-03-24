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

@NgModule({
  declarations: [
    AppComponent,
    GitComponent,
    HomeComponent
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
