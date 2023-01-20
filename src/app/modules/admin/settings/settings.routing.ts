import { Route } from '@angular/router';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ContactViewSettingComponent } from './contact-view-setting/contact-view-setting.component';
import { LogoutComponent } from './logout/logout.component';
import { PhotoPrivacySettingComponent } from './photo-privacy-setting/photo-privacy-setting.component';

export const settingsRoutes: Route[] = [
    {
        path     : '',
        redirectTo: 'photoprivacysetting'
    },
    {
        path     : 'photoprivacysetting',
        component: PhotoPrivacySettingComponent
    },
    {
        path     : 'contactviewsetting',
        component: ContactViewSettingComponent
    },
    {
        path     : 'changepassword',
        component: ChangePasswordComponent
    },
    {
        path     : 'logout',
        component: LogoutComponent
    }
];
