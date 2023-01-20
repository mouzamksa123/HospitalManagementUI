import { Route } from '@angular/router';
import { InboxComponent } from 'app/modules/admin/messages/inbox/inbox.component';
import { OutboxComponent } from 'app/modules/admin/messages/outbox/outbox.component';

export const messagestRoutes: Route[] = [
    {
        path     : '',
        redirectTo: 'inbox'
    },
    {
        path     : 'inbox',
        component: InboxComponent
    },
    {
        path     : 'outbox',
        component: OutboxComponent
    }
];
