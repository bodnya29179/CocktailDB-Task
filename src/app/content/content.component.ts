/* Import all modules. */
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

/* Import Filter and Cocktail services. */
import { CocktailService } from '../services/cocktail.service';
import { FilterService } from '../services/filter.service';

/* Import Category and Content interfaces. */
import { Category } from '../shared/category';
import { Content } from '../shared/content';

/* Using the @Component decorator to make a class a component. */
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

/* Module view using class. */
export class ContentComponent implements OnInit, OnDestroy {

  /* All variables declaration. */
  content: Content[] = [];
  errorMessage: string;

  filteredCategories: Category[];
  onDestroy$: Subject<void> = new Subject<void>();

  /* Using services to get cocktails and filter categories. */
  constructor(
    private cocktailService: CocktailService,
    private filterService: FilterService,
  ) {
    /* Get all filtered categories from Filter service (Filter component). */
    this.filterService.getFilteredCategories()
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((categories) => this.filteredCategories = categories);
  }

  /* Perform component initialization. */
  ngOnInit() {
    /* Get all cocktail categories. */
    this.cocktailService.getCategories()
      .subscribe(
        (categories) => {
          /* Set checked all filtered categories. */
          this.filteredCategories = categories.drinks;

          /* Get all cocktails of checked categories. */
          categories.drinks.forEach(category => {
            this.cocktailService
              .getCocktailsByCategory(category.strCategory)
              .subscribe(cocktails => {
                /* Set content data. */
                this.content.push({
                  strCategory: category.strCategory,
                  drinks: cocktails.drinks
                });
              })
          });
        },
        /* Error handling. */
        (errorMessage) => this.errorMessage = <any>errorMessage
      );
  }

  /*
  * Perform custom clean-up, invoked immediately 
  * before a directive, pipe, or service instance 
  * is destroyed. 
  */
  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  /* Checking if the category belongs to the filtered categories. */
  exists(category: string): Boolean {
    return Boolean(this.filteredCategories.find((categories) => categories.strCategory === category));
  }
}
