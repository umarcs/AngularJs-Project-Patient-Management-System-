import { Component, OnInit } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit {

    
    isLogin = false;

    ngOnInit() {
        console.log('asdf')
        const currentUser: any = localStorage.getItem('currentUser');
        console.log('currentUser:: ', currentUser)
        if(currentUser){
            this.isLogin = true;
        }
    }

 }