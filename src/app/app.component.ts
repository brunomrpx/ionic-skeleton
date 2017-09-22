import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomeComponent } from './pages/home/home.component';
import { ResourceRequest } from './core/resource/resource-request';
import { API } from './domain/domain.constant';
import { CustomResourceRequestHandler } from './domain/shared/custom-resource-request-handler';

@Component({
  templateUrl: 'app.component.html'
})
export class AppComponent {
  rootPage: any = HomeComponent;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, resourceRequest: ResourceRequest, customResourceRequestHandler: CustomResourceRequestHandler) {
    resourceRequest.resourceRequestHandler = customResourceRequestHandler;
    resourceRequest.baseURL = API.BASE_URL;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

