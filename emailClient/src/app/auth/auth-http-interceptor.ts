import { Injectable } from '@angular/core';
import { HttpEventType , HttpEvent , HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, filter } from 'rxjs/operators';

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        //modify or log the outgoing request
        const modifiedReq = req.clone({
            withCredentials: true
        });
        return next.handle(modifiedReq)
        //for events around a request
        /*
        .pipe(
            filter( val => val.type === HttpEventType.Sent),
            tap( val => {
               console.log('Sent the request');
            })
        )
        */
    }
}

