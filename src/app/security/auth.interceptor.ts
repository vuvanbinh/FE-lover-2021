import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';

const TOKEN_AUTHORITY = 'Authorization';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let checkRequest = request;
    const token = window.localStorage.getItem('TOKEN_KEY');
    if (token!=null){
      checkRequest = request.clone({headers: request.headers.set(TOKEN_AUTHORITY,'Bearer'+token)})
    }
    return next.handle(checkRequest);
  }
}


export const httpInterceptorProviders=[
  {provide:HTTP_INTERCEPTORS,useClass: AuthInterceptor, multi: true}
]
