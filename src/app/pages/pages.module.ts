import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CoreModule } from '../core/core.module';


import { HomeComponent } from './home/home.component';
import { CardsTabComponent } from './home/cards-tab/cards-tab.component';
import { SetsTabComponent } from './home/sets-tab/sets-tab.component';

@NgModule({
  imports: [
    IonicModule,
    CoreModule
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
