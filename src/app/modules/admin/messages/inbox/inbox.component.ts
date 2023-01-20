import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'app/shared/services';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {

  constructor(private messagesService:MessagesService) { }

  ngOnInit(): void {
  }

}
