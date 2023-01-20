import { Component, OnInit } from '@angular/core';
import { ProfileDetailsService } from 'app/shared/services';

@Component({
  selector: 'app-my-blocklist-profiles',
  templateUrl: './my-blocklist-profiles.component.html',
  styleUrls: ['./my-blocklist-profiles.component.scss']
})
export class MyBlocklistProfilesComponent implements OnInit {

  constructor(private profileDetailsService:ProfileDetailsService) { }

  ngOnInit(): void {
  }

}
