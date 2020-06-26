/* Import Angular and RxJS modules. */
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

/* Import Category interface. */
import { Category } from '../shared/category';

/* Using the @Injectable decorator to mark a class as an injected service. */
@Injectable({
  providedIn: 'root'
})

/* Service for getting and setting filtered cocktail categories. */
export class FilterService {

  filteredCategories: BehaviorSubject<object> = new BehaviorSubject(null);

  constructor() { }

  /* Get all categories for filtering. */
  getFilteredCategories(): Observable<any> {
    return this.filteredCategories.asObservable();
  }

  /* Set categories for filtering. */
  setFilteredCategories(categories: Category[]) {
    this.filteredCategories.next(categories);
  }
}
