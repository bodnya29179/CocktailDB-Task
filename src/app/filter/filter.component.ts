/* Import @Component decorator and OnInit interface from Angular module. */
import { Component, OnInit } from '@angular/core';

/* Import Cocktail and Filter services. */
import { CocktailService } from '../services/cocktail.service';
import { FilterService } from '../services/filter.service';

/* Import Category interface. */
import { Category } from '../shared/category';

/* Using the @Component decorator to make a class a component. */
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})

/* Module view using class. */
export class FilterComponent implements OnInit {

  /* All variables declaration. */
  categories: Category[];
  errorMessage: string;

  /* Using services. */
  constructor(
    private cocktailService: CocktailService,
    private filterService: FilterService,
  ) { }

  /* Perform component initialization. */
  ngOnInit() {
    /* Use Cocktail service to get categories. */
    this.cocktailService.getCategories()
      .subscribe(
        categories => {
          /* Get all cocktail categories. */
          this.categories = categories.drinks;
          
          /* Set all checkboxes as checked. */
          this.categories.forEach(category => category.checked = true);
        },
        /* Handle error. */
        errorMessage => this.errorMessage = <any>errorMessage 
      );
  }

  /* Transfer all checked categories of checkboxes using Filter service. */
  filterCocktails() {
    this.filterService
      .setFilteredCategories(
        this.categories.filter(category => category.checked)
      );
  }

}
