import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InboxComponent } from './inbox/inbox.component';
import { OutboxComponent } from './outbox/outbox.component';
import { RouterModule } from '@angular/router';
import { messagestRoutes } from '../messages/messages.routing';



@NgModule({
  declarations: [
    InboxComponent,
    OutboxComponent
  ],
  imports:[
    RouterModule.forChild(messagestRoutes)
]
})
export class EmailMessagesModule { }
