import { Component, OnInit } from '@angular/core';
import { ProfileDetailsService } from 'app/shared/services';

@Component({
  selector: 'app-i-visited-profile',
  templateUrl: './i-visited-profile.component.html',
  styleUrls: ['./i-visited-profile.component.scss']
})
export class IVisitedProfileComponent implements OnInit {

  constructor(private profileDetailsService:ProfileDetailsService) { }

  ngOnInit(): void {
  }

}
