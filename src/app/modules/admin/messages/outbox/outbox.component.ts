import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'app/shared/services';

@Component({
  selector: 'app-outbox',
  templateUrl: './outbox.component.html',
  styleUrls: ['./outbox.component.scss']
})
export class OutboxComponent implements OnInit {

  constructor(private messagesService:MessagesService) { }

  ngOnInit(): void {
  }

}
