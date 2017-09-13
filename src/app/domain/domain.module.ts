import { NgModule } from '@angular/core';
import { IonicModule} from 'ionic-angular';

import { SharedModule } from 'domain/shared/shared.module';
import { CardModule } from 'domain/cards/card.module';

@NgModule({
  imports: [
    SharedModule,
    IonicModule,
    CardModule
  ],
  declarations: [],
  providers: [],
})
export class DomainModule {}
