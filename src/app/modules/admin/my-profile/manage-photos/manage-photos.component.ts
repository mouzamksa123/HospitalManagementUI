import { Component, OnInit } from '@angular/core';
import { MyProfileService } from 'app/shared/services';

@Component({
  selector: 'app-manage-photos',
  templateUrl: './manage-photos.component.html',
  styleUrls: ['./manage-photos.component.scss']
})
export class ManagePhotosComponent implements OnInit {

  constructor(private myProfileService: MyProfileService) { }

  ngOnInit(): void {
  }

}
