import { Component, OnInit } from '@angular/core';
import { MyProfileService } from 'app/shared/services';

@Component({
  selector: 'app-edit-preferences',
  templateUrl: './edit-preferences.component.html',
  styleUrls: ['./edit-preferences.component.scss']
})
export class EditPreferencesComponent implements OnInit {

  constructor(private myProfileService: MyProfileService) { }

  ngOnInit(): void {
  }

}
