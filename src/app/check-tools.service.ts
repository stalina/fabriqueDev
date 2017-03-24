import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { IdentityService } from "./identity.service";
import {Tools} from "./tools"

import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class CheckToolsService {

  constructor(private identityService: IdentityService,private http: Http) {
  }

  health(tools: Tools) : Observable<Boolean> {
    return this.http.get(tools.toString().replace("CI_IP",this.identityService.identity.ciIp).toString())
      .map(this.extractData)
      .catch(this.handleError);
  }

 private extractData(res: Response) {
    return true;
  }

  private handleError (error: Response | any) {
    return Observable.throw(false);
  }
}
