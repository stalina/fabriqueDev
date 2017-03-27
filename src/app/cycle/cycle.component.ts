import { Component, OnInit } from '@angular/core';
import { IdentityService } from '../identity.service';
import { Identity } from '../identity';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-cycle',
  templateUrl: './cycle.component.html',
  styleUrls: ['./cycle.component.css']
})
export class CycleComponent implements OnInit {

  identity: Observable<Identity>;

  constructor(identityService: IdentityService) { }

  ngOnInit() {
  }

}
