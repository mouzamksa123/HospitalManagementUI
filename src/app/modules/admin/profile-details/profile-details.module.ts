import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterestReceivedComponent } from './interest-received/interest-received.component';
import { MyShortlistProfilesComponent } from './my-shortlist-profiles/my-shortlist-profiles.component';
import { MyBlocklistProfilesComponent } from './my-blocklist-profiles/my-blocklist-profiles.component';
import { MyProfileViewedComponent } from './my-profile-viewed/my-profile-viewed.component';
import { IVisitedProfileComponent } from './i-visited-profile/i-visited-profile.component';
import { MobileNumbersViewedComponent } from './mobile-numbers-viewed/mobile-numbers-viewed.component';
import { PhotoPasswordRequestComponent } from './photo-password-request/photo-password-request.component';
import { RouterModule } from '@angular/router';
import { profileDetailsRoutes } from '../profile-details/profile-details.routing';



@NgModule({
  declarations: [
    InterestReceivedComponent,
    MyShortlistProfilesComponent,
    MyBlocklistProfilesComponent,
    MyProfileViewedComponent,
    IVisitedProfileComponent,
    MobileNumbersViewedComponent,
    PhotoPasswordRequestComponent
  ],
  imports: [  
    RouterModule.forChild(profileDetailsRoutes)
  ]
})
export class ProfileDetailsModule { }
