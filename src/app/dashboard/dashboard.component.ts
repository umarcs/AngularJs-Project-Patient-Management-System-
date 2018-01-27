import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompleterService, CompleterData } from 'ng2-completer';


import * as _ from 'lodash';
@Component({
  selector: 'app-patient-reg',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})

export class DashboardComponent implements OnInit {
public data : any;
ngOnInit() {
      var currentUser = JSON.parse(localStorage.getItem('currentUser'));
  console.log(currentUser.token.msg)
   this.data = currentUser.token.msg;
}
constructor(private DashboardComponent: CompleterService) {
    this.dataService = DashboardComponent.local(this.searchData, 'color', 'color');
  }
  protected searchStr: string;
  protected captain: string;
  protected dataService: CompleterData;
  protected searchData = [
    { color: 'red', value: '#f00' },
    { color: 'green', value: '#0f0' },
    { color: 'blue', value: '#00f' },
    { color: 'cyan', value: '#0ff' },
    { color: 'magenta', value: '#f0f' },
    { color: 'yellow', value: '#ff0' },
    { color: 'black', value: '#000' }
  ];
  protected captains = ['James T. Kirk', 'Benjamin Sisko', 'Jean-Luc Picard', 'Spock', 'Jonathan Archer', 'Hikaru Sulu', 'Christopher Pike', 'Rachel Garrett'];

  
}




  



