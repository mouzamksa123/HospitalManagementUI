import { Component, OnInit } from '@angular/core';
import { ProfileDetailsService } from 'app/shared/services';

@Component({
  selector: 'app-photo-password-request',
  templateUrl: './photo-password-request.component.html',
  styleUrls: ['./photo-password-request.component.scss']
})
export class PhotoPasswordRequestComponent implements OnInit {

  constructor(private profileDetailsService:ProfileDetailsService) { }

  ngOnInit(): void {
  }

}
