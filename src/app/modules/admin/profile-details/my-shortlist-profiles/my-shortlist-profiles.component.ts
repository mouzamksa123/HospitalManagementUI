import { Component, OnInit } from '@angular/core';
import { ProfileDetailsService } from 'app/shared/services';

@Component({
  selector: 'app-my-shortlist-profiles',
  templateUrl: './my-shortlist-profiles.component.html',
  styleUrls: ['./my-shortlist-profiles.component.scss']
})
export class MyShortlistProfilesComponent implements OnInit {

  constructor(private profileDetailsService:ProfileDetailsService) { }

  ngOnInit(): void {
  }

}
