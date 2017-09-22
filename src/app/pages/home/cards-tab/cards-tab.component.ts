import { Component } from '@angular/core';

import { Card } from '../../../domain/cards/card.model';
import { CardService } from '../../../domain/cards/card.service';

@Component({
  selector: 'cards-tab',
  templateUrl: 'cards-tab.component.html'
})
export class CardsTabComponent {
  public cards: Card[] = [];
  public errorMessage: string = null;

  constructor(public cardService: CardService) { }

  ngOnInit() {
    this.cardService.getCards().take(1).subscribe(cards => {
      this.errorMessage = null;
      this.cards = cards;
    }, error => {
      this.errorMessage = error.message;
    });
  }
}
