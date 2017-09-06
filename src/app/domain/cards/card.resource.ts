import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Card } from './card.model';
import { API } from '../domain.constant';

@Injectable()
export class CardResource {
  constructor(private http: Http) { }

  public getCards(): Observable<any> {
    const url = API.BASE_URL + '/cards';

    return this.http.get(url).map(response => response.json());
  }
}
