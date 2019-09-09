import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { Photo } from '../../../model/photo';
import { AuthService } from '../../../services/auth.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  modalRef: BsModalRef;
  photos: Photo[];
  @Input() photo:Photo;
  constructor(private modalService:BsModalService) { }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  
  ngOnInit() {
    
  }
}
