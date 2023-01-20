import { Component, OnInit } from '@angular/core';
import { MyProfileService } from 'app/shared/services';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  constructor(private myProfileService: MyProfileService) { }

  ngOnInit(): void {
  }

}
