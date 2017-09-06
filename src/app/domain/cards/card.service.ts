import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { CardResource } from './card.resource';
import { Card } from './card.model';

@Injectable()
export class CardService {
  constructor(private cardResource: CardResource) { }

  public getCards() {
    return this.cardResource.getCards();
  }
}
