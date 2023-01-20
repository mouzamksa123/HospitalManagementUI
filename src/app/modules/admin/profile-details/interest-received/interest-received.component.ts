import { Component, OnInit } from '@angular/core';
import { ProfileDetailsService } from 'app/shared/services';

@Component({
  selector: 'app-interest-received',
  templateUrl: './interest-received.component.html',
  styleUrls: ['./interest-received.component.scss']
})
export class InterestReceivedComponent implements OnInit {

  constructor(private profileDetailsService:ProfileDetailsService) { }

  ngOnInit(): void {
  }

}
