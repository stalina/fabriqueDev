import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgbTabsetConfig } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Rx';
import { CheckToolsService } from '../check-tools.service'
import { Tools } from '../tools'

@Component({
  selector: 'app-git',
  templateUrl: './git.component.html',
  styleUrls: ['./git.component.css'],
  providers: [NgbTabsetConfig]
})
export class GitComponent implements OnInit {
  health = false;
  constructor(private modalService: NgbModal, config: NgbTabsetConfig, private checkToolsService: CheckToolsService) {
    config.justify = 'center';
    config.type = 'pills';
    Observable.interval(10000).subscribe(x => {
      this.checkToolsService.health(Tools.GIT)
        .subscribe(
        health => this.health = true,
        error => this.health = false);
    });
  }

  open(content) {
    this.modalService.open(content);
  }

  ngOnInit() {
  }

}
