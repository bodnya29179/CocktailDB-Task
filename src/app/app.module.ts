/* Import modules. */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

/* Import components. */
import { AppComponent } from './app.component';
import { FilterComponent } from './filter/filter.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';

/* Import services. */
import { CocktailService } from './services/cocktail.service';
import { FilterService } from './services/filter.service';

/* Decorator function NgModule. */
@NgModule({
  /* View classes that belong to the module. */
  declarations: [
    AppComponent,
    FilterComponent,
    HeaderComponent,
    ContentComponent
  ],
   /* Other modules whose classes are required for component templates from the current module. */
  imports: [
    BrowserModule, 
    HttpClientModule,
    FormsModule
  ],
  /* Classes that create services used by the module. */
  providers: [
    CocktailService,
    FilterService
  ],
  /* The root component that is called by default when the application loads. */
  bootstrap: [AppComponent]
})

/* Module view using class. */
export class AppModule { }
