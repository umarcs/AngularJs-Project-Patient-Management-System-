import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'secure',
  templateUrl: './secure.component.html'
})
export class SecureComponent implements OnInit {

  constructor() { }
  public data:any
  ngOnInit() {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
  console.log(currentUser.token.msg)
   this.data = currentUser.token.msg;
  }
  
}
