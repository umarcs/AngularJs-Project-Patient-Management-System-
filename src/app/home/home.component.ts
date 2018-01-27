import { Component, OnInit } from '@angular/core';


@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    
   user_array = [
       "umer",
       "ali"
   ];
    constructor() { }

    ngOnInit() {}
  
}
