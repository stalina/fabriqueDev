import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgbTabsetConfig } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Rx';
import { CheckToolsService } from '../check-tools.service'
import { Tools } from '../tools'
import {ToolComponent} from '../tool-component'

@Component({
  selector: 'app-teamcity',
  templateUrl: './teamcity.component.html',
  styleUrls: ['./teamcity.component.css']
})
export class TeamcityComponent extends ToolComponent implements OnInit {

  constructor(private modalService: NgbModal, config: NgbTabsetConfig, private checkToolsService: CheckToolsService) {
    super(checkToolsService,Tools.TEAMCITY);
    config.justify = 'center';
    config.type = 'pills';
   
  }

  open(content) {
    this.modalService.open(content);
  }

  ngOnInit() {
  }

}
