import { Component, Input } from '@angular/core';

@Component({
  selector: 'page-message',
  templateUrl: 'page-message.component.html'
})
export class PageMessageComponent {
  @Input() message: String;
  @Input() showTryAgain = false;
}
