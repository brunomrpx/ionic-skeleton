import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { HomeComponent } from 'pages/home/home.component';
import { CardsTabComponent } from 'pages/home/cards-tab/cards-tab.component';
import { SetsTabComponent } from 'pages/home/sets-tab/sets-tab.component';

@NgModule({
  imports: [
    IonicModule
  ],
  declarations: [
    HomeComponent,
    CardsTabComponent,
    SetsTabComponent
  ],
  entryComponents: [
    HomeComponent,
    CardsTabComponent,
    SetsTabComponent
  ],
  providers: []
})
export class PagesModule {}
