import { Component } from '@angular/core';

import { CardService } from '../../../domain/cards/card.service';
import { Card } from '../../../domain/cards/card.model';

@Component({
  selector: 'cards-tab',
  templateUrl: 'cards-tab.component.html'
})
export class CardsTabComponent {
  public cards: Card[] = [];

  constructor(public cardService: CardService) { }

  ngOnInit() {
    this.cardService.getCards().take(1).subscribe(cards => {
      this.cards = cards;
    });
  }
}