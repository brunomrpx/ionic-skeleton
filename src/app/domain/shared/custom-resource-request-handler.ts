import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { ResourceRequestHandler } from '../../core/resource/resource-request';

@Injectable()
export class CustomResourceRequestHandler implements ResourceRequestHandler {
  public handleRequestSuccess(response: Response) {
    return response.json();
  }

  public handleRequestError(error: Response | Error) {
    let throwableError = error;
    let message = null;

    if (error instanceof Response) {
      if (error.status === 404) {
        message = "Resource not found";
      } else {
        throwableError = error.json();
      }
    }

    if (message) {
      throwableError = new Error(message);
    }

    return Observable.throw(throwableError);
  }
}
