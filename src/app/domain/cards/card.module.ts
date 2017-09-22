import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicModule} from 'ionic-angular';

import { CardResource } from './card.resource';
import { CardService } from './card.service';

@NgModule({
  imports: [
    IonicModule,
    HttpModule
  ],
  exports: [
    HttpModule
  ],
  declarations: [],
  providers: [
    CardResource,
    CardService
  ]
})
export class CardModule {}
