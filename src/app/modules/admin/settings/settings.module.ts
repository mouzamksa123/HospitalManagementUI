import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoPrivacySettingComponent } from './photo-privacy-setting/photo-privacy-setting.component';
import { ContactViewSettingComponent } from './contact-view-setting/contact-view-setting.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { LogoutComponent } from './logout/logout.component';
import { RouterModule } from '@angular/router';
import { settingsRoutes } from '../settings/settings.routing';

@NgModule({
  declarations: [
    PhotoPrivacySettingComponent,
    ContactViewSettingComponent,
    ChangePasswordComponent,
    LogoutComponent
  ],
  imports: [
    RouterModule.forChild(settingsRoutes)
  ]
})
export class SettingsModule { }
