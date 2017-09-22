import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { ResourceRequest } from './resource/resource-request';
import { PageMessageComponent } from './page-message/page-message.component';

@NgModule({
  imports: [
    IonicModule
  ],
  declarations: [
    PageMessageComponent
  ],
  providers: [
    ResourceRequest
  ],
  exports: [
    PageMessageComponent
  ]
})
export class CoreModule {}
