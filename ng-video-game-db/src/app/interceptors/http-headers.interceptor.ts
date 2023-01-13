import { HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHandler } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor{
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        'X-RapidAPI-Key': 'fb11822b40msh48bd82d51dce04cp1c4a21jsnc8de76f19548',
        'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'
      },
      setParams:{
        key: 'e40e743af2c94b0c916a8aa618fb4473',
      }
    });
    return next.handle(req)
  }
}
