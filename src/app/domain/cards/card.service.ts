import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { CardResource } from 'domain/cards/card.resource';
import { Card } from 'domain/cards/card.model';

@Injectable()
export class CardService {
  constructor(private cardResource: CardResource) { }

  public getCards(): Observable<Card[]> {
    return this.cardResource.getCards().map(response => response.cards);
  }
}
