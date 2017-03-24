import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IdentityService } from "../identity.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private identityService: IdentityService, private modalService: NgbModal) {
  }
  open(content) {
    this.modalService.open(content);
  }
  save() {
    this.identityService.save();
  }

  ngOnInit() {
  }

}
