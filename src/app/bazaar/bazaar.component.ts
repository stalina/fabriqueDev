import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgbTabsetConfig } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Rx';
import { CheckToolsService } from '../check-tools.service'
import { Tools } from '../tools'
import {ToolComponent} from '../tool-component'

@Component({
  selector: 'app-bazaar',
  templateUrl: './bazaar.component.html',
  styleUrls: ['./bazaar.component.css']
})
export class BazaarComponent extends ToolComponent implements OnInit {

  constructor(private modalService: NgbModal, config: NgbTabsetConfig, private checkToolsService: CheckToolsService) {
    super(checkToolsService,Tools.BAZAAR);
    config.justify = 'center';
    config.type = 'pills';
   
  }

  open(content) {
    this.modalService.open(content);
  }

  ngOnInit() {
  }

}
