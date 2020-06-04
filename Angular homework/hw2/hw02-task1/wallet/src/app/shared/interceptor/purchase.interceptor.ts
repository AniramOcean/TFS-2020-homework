import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';

@Injectable()
export class PurchaseInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(req);
    const host = req.clone({
      url: req.url.replace(/(?<=http:\/\/)[\w,:]+\/*/, 'localhost:3000')
    });
    return next.handle(host);
  }
}
