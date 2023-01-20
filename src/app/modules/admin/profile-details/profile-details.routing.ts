import { Route } from '@angular/router';
import { InterestReceivedComponent } from 'app/modules/admin/profile-details/interest-received/interest-received.component';
import { MyShortlistProfilesComponent } from 'app/modules/admin/profile-details/my-shortlist-profiles/my-shortlist-profiles.component';
import { MyBlocklistProfilesComponent } from 'app/modules/admin/profile-details/my-blocklist-profiles/my-blocklist-profiles.component';
import { MyProfileViewedComponent } from 'app/modules/admin/profile-details/my-profile-viewed/my-profile-viewed.component';
import { IVisitedProfileComponent } from 'app/modules/admin/profile-details/i-visited-profile/i-visited-profile.component';
import { MobileNumbersViewedComponent } from 'app/modules/admin/profile-details/mobile-numbers-viewed/mobile-numbers-viewed.component';
import { PhotoPasswordRequestComponent } from 'app/modules/admin/profile-details/photo-password-request/photo-password-request.component';

export const profileDetailsRoutes: Route[] = [
    {
        path     : '',
        redirectTo: 'interestreceived'
    },
    {
        path     : 'interestreceived',
        component: InterestReceivedComponent
    },
    {
        path     : 'myshortlistprofiles',
        component: MyShortlistProfilesComponent
    },
    {
        path     : 'myblocklistprofiles',
        component: MyBlocklistProfilesComponent
    },
    {
        path     : 'myprofileviewed',
        component: MyProfileViewedComponent
    },
    {
        path     : 'ivisitedprofile',
        component: IVisitedProfileComponent
    },
    {
        path     : 'mobilenumbersviewed',
        component: MobileNumbersViewedComponent
    },
    {
        path     : 'photopasswordrequest',
        component: PhotoPasswordRequestComponent
    }
];
