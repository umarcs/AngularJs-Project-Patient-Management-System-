import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '../services/login/login.service';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [LoginService]
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    error = '';
    photos = "./pms2.jpg";

    constructor(
        private router: Router,
        private loginService: LoginService
    ) { }

    ngOnInit() {
        // reset login status
        this.loginService.logout();

    }

    login() {
        //console.log(this.model)
        this.loading = true;
        this.loginService.login(this.model)
            .subscribe(result => {
                console.log("result", result);

                if (result == true) {
                    // console.log('gong to naviagte')
                   let  __this = this;           
                    setTimeout(function () {
                       // alert("hi")
                       __this.router.navigate(['/dashboard']);
                    }, 2000);
                      

                } else {
                    this.error = null;
                    let __this = this;
                     setTimeout(function () {
                       __this.error = 'Username or password is incorrect';
                       __this.loading = false;
                    }, 1000);

                      

                }
            });
    }
        focusin(){
            this.error = null
        }
}
