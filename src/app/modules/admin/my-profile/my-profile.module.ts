import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ManagePhotosComponent } from './manage-photos/manage-photos.component';
import { EditPreferencesComponent } from './edit-preferences/edit-preferences.component';
import { RouterModule } from '@angular/router';
import { myProfileRoutes } from '../my-profile/my-profile.routing';
import { MyExpressInterestComponent } from './my-express-interest/my-express-interest.component';
import { MySavedSearchesComponent } from './my-saved-searches/my-saved-searches.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FuseCardModule } from '@fuse/components/card';
import { SharedModule } from 'app/shared/shared.module';


@NgModule({
  declarations: [
    EditProfileComponent,
    ManagePhotosComponent,
    EditPreferencesComponent,
    MyExpressInterestComponent,
    MySavedSearchesComponent
  ],
  imports: [  
    RouterModule.forChild(myProfileRoutes),
    MatButtonModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatTooltipModule,
    FuseCardModule,
    SharedModule
  ]
})
export class MyProfileModule { }
