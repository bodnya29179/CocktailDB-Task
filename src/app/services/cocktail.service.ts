/* Import Angular and RxJS modules. */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators'

/* Import base URL and interfaces. */
import { baseURL } from '../shared/baseurl';
import { Categories } from '../shared/categories';
import { Cocktails } from '../shared/cocktails';

/* Import Process HTTP Message service for error handling. */
import { ProcessHTTPMsgService } from './process-httpmsg.service';

/* Using the @Injectable decorator to mark a class as an injected service. */
@Injectable({
  providedIn: 'root'
})

/* Service for working with cocktail data. */
export class CocktailService {

  /* Using HTTP Client for GET request and Process HTTP Message for error handling. */
  constructor(
    private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService,
  ) { }

  /* Get cocktail categories using GET request. */
  getCategories(): Observable<Categories> {
    return this.http.get<Categories>(`${baseURL}list.php?c=list`)
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  /* Get cocktails of its category using GET request. */
  getCocktailsByCategory(category: string): Observable<Cocktails> {
    return this.http.get<Cocktails>(`${baseURL}filter.php?c=${category}`)
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }
}
