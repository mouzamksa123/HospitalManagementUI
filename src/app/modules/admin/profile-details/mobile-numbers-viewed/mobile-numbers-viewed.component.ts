import { Component, OnInit } from '@angular/core';
import { ProfileDetailsService } from 'app/shared/services';

@Component({
  selector: 'app-mobile-numbers-viewed',
  templateUrl: './mobile-numbers-viewed.component.html',
  styleUrls: ['./mobile-numbers-viewed.component.scss']
})
export class MobileNumbersViewedComponent implements OnInit {

  constructor(private profileDetailsService:ProfileDetailsService) { }

  ngOnInit(): void {
  }

}
