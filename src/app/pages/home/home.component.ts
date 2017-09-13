import { Component } from '@angular/core';

import { CardsTabComponent } from 'pages/home/cards-tab/cards-tab.component';
import { SetsTabComponent } from 'pages/home/sets-tab/sets-tab.component';

@Component({
  selector: 'home-page',
  templateUrl: 'home.component.html'
})
export class HomeComponent {
  public cardsTab: any;
  public setsTab: any;

  constructor() {
    this.cardsTab = CardsTabComponent;
    this.setsTab = SetsTabComponent;
  }
}
