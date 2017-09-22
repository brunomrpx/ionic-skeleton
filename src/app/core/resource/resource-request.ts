import { Injectable } from '@angular/core';
import { Response, RequestMethod, RequestOptionsArgs, Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

export interface ResourceRequestHandler {
  handleRequestSuccess<T>(response: Response): T;
  handleRequestError(error: Response | Error): ErrorObservable;
}

@Injectable()
export class ResourceRequest {
  private _resourceRequestHandler: ResourceRequestHandler;
  private _baseURL: String;

  constructor(private http: Http) { }

  set baseURL(baseURL: String) {
    this._baseURL = baseURL;
  }

  get baseURL() {
    if (!this._baseURL) {
      throw new Error('BaseURL not configured');
    }

    return this._baseURL;
  }

  set resourceRequestHandler(handler: ResourceRequestHandler) {
    this._resourceRequestHandler = handler;
  }

  get resourceRequestHandler() {
    if (!this._baseURL) {
      throw new Error('ResourceRequestHandler not configured');
    }

    return this._resourceRequestHandler;
  }

  public sendRequest<T>(method: RequestMethod, endpoint: string, requestOptions: RequestOptionsArgs = {}): Observable<T> {
    const url = this.getUrl(endpoint);
    const formattedRequestOptions = this.formatRequestOptions(method, requestOptions);

    return this.http.request(url, formattedRequestOptions)
      .map(response => this.resourceRequestHandler.handleRequestSuccess<T>(response))
      .catch(error => this.resourceRequestHandler.handleRequestError(error));
  }

  private formatRequestOptions(method: RequestMethod, requestOptions: RequestOptionsArgs) {
    const defaultRequestOptions = { method };
    const formattedRequestOptions = Object.assign(defaultRequestOptions, requestOptions);

    return formattedRequestOptions;
  }

  private getUrl(endpoint: string) {
    return this.baseURL + endpoint;
  }
}
