import { Injectable } from '@angular/core';
import { RequestMethod } from '@angular/http';

import { Card } from './card.model';
import { ResourceRequest } from '../../core/resource/resource-request';

@Injectable()
export class CardResource {
  constructor(private resourceRequest: ResourceRequest) { }

  public getCards() {
    return this.resourceRequest.sendRequest<{ cards: Card[]}>(RequestMethod.Get, 'cards');
  }
}
