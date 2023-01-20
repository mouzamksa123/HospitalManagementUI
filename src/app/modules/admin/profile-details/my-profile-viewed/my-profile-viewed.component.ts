import { Component, OnInit } from '@angular/core';
import { ProfileDetailsService } from 'app/shared/services';

@Component({
  selector: 'app-my-profile-viewed',
  templateUrl: './my-profile-viewed.component.html',
  styleUrls: ['./my-profile-viewed.component.scss']
})
export class MyProfileViewedComponent implements OnInit {

  constructor(private profileDetailsService:ProfileDetailsService) { }

  ngOnInit(): void {
  }

}
