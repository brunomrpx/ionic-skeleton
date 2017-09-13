import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { ResourceRequestHandler } from 'core/resource/resource-request';

@Injectable()
export class CustomResourceRequestHandler implements ResourceRequestHandler {
  public handleRequestSuccess(response: Response) {
    return response.json();
  }

  public handleRequestError(error: Response | Error) {
    let throwableError = error;

    if (error instanceof Response) {
      throwableError = error.json();
    }

    return Observable.throw(throwableError);
  }
}
