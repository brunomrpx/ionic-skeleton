import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { CardResource } from './card.resource';
import { Card } from './card.model';

@Injectable()
export class CardService {
  constructor(private cardResource: CardResource) { }

  public getCards(): Observable<Card[]> {
    return this.cardResource.getCards().map(response => response.cards);
  }
}
