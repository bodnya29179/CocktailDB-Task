/* Import @Component decorator and OnInit interface from Angular module. */
import { Component, OnInit } from '@angular/core';

/* Using the @Component decorator to make a class a component. */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

/* Module view using class. */
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() { }
  
}
