/**
 * Created by tisamo on 2020. 01. 30..
 */
import {Injectable, OnInit} from '@angular/core';
import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {getToken} from '../../app.module';
@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    console.log('intercept works');
    const Authtoken = getToken();
    const req = request.clone({
      setHeaders: {
        AuthToken: Authtoken
      }
    });

    return next.handle(req);
  }


}

