import { NgModule } from '@angular/core';
import { IonicModule} from 'ionic-angular';
import { SharedModule } from './shared/shared.module';

import { CardModule } from './cards/card.module';

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
