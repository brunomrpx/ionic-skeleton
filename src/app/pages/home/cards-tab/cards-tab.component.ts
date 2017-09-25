import { Component, ViewChild } from '@angular/core';

import { Card } from '../../../domain/cards/card.model';
import { CardService } from '../../../domain/cards/card.service';
import { PageMessageDirective } from '../../../core/page-message/page-message.directive';

@Component({
  selector: 'cards-tab',
  templateUrl: 'cards-tab.component.html'
})
export class CardsTabComponent {
  public cards: Card[] = [];
  public pageMessageOptions = {
    show: false,
    message: null,
    tryAgain: true
  };

  @ViewChild(PageMessageDirective) pageMessageDirective: PageMessageDirective;

  constructor(public cardService: CardService) { }

  ionViewWillEnter() {
    this.cardService.getCards().take(1).subscribe(cards => {
      this.pageMessageDirective.pageMessageOptions.value.show = false;

      this.cards = cards;
    }, error => {
      this.pageMessageDirective.pageMessageOptions.value.show = true;
      this.pageMessageDirective.pageMessageOptions.value.show = error.message;
    });
  }
}
