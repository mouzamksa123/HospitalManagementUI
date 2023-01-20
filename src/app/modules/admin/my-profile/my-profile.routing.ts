import { Route } from '@angular/router';
import { EditProfileComponent } from 'app/modules/admin/my-profile/edit-profile/edit-profile.component';
import { ManagePhotosComponent } from 'app/modules/admin/my-profile/manage-photos/manage-photos.component';
import { EditPreferencesComponent } from 'app/modules/admin/my-profile/edit-preferences/edit-preferences.component';
import { MySavedSearchesComponent } from './my-saved-searches/my-saved-searches.component';
import { MyExpressInterestComponent } from './my-express-interest/my-express-interest.component';

export const myProfileRoutes: Route[] = [
    {
        path     : '',
        redirectTo: 'editProfile'
    },
    {
        path     : 'editProfile',
        component: EditProfileComponent
    },
    {
        path     : 'managePhotos',
        component: ManagePhotosComponent
    },
    {
        path     : 'editPreferences',
        component: EditPreferencesComponent
    },
    {
        path     : 'mysavedsearches',
        component: MySavedSearchesComponent
    },
    {
        path     : 'myexpressinterest',
        component: MyExpressInterestComponent
    }
];
