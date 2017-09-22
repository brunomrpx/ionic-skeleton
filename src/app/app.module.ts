import 'rxjs/Rx';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { CoreModule } from './core/core.module';
import { DomainModule } from './domain/domain.module';
import { PagesModule } from './pages/pages.module';

import { AppComponent } from './app.component';

@NgModule({
  bootstrap: [IonicApp],
  imports: [
    CoreModule,
    DomainModule,
    PagesModule,
    BrowserModule,
    IonicModule.forRoot(AppComponent)
  ],
  declarations: [
    AppComponent
  ],
  entryComponents: [
    AppComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
