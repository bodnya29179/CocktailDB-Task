/* Import Angular and RxJS modules. */
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

/* Using the @Injectable decorator to mark a class as an injected service. */
@Injectable({
  providedIn: 'root'
})

/* Service for error handling. */
export class ProcessHTTPMsgService {

  constructor() { }

  /* Error handling. */
  public handleError(error: HttpErrorResponse | any) {
    let errMsg: string;

    if (error.error instanceof ErrorEvent) {
      errMsg = error.error.message;
    } else {
      errMsg = `${error.status} - ${error.statusText || ''} ${error.error}`;
    }

    return throwError(errMsg);
  }
}