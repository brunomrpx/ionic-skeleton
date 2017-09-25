import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { ResourceRequest } from './resource/resource-request';
import { PageMessageComponent } from './page-message/page-message.component';
import { PageMessageDirective } from './page-message/page-message.directive';

@NgModule({
  imports: [
    IonicModule
  ],
  declarations: [
    PageMessageComponent,
    PageMessageDirective
  ],
  entryComponents: [
    PageMessageComponent
  ],
  providers: [
    ResourceRequest
  ],
  exports: [
    PageMessageComponent,
    PageMessageDirective
  ]
})
export class CoreModule {}
