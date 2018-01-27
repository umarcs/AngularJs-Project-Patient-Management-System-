import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class LoginService {
  public token: string;
  constructor(private http: Http) {
    // set token if saved in local storage
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    console.log("son",currentUser)
    this.token = currentUser && currentUser.token;

  }

  login(loginData : any): Observable<boolean> {
    return this.http.post('http://localhost:2222/api/login', loginData)
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        console.log("my res is " ,response.json(),response.json())
        let token =  response.json();
        console.log("hi my token is " ,token, JSON.stringify({  token: token }))
        if (token) {
          // set token property
          this.token = token;

          // store username and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify({  token: token }));

          // return true to indicate successful login
          return true;
        } else {
          // return false to indicate failed login
          return false;
        }
      });
  }


  logout(): void {
    // clear token remove user from local storage to log user out
    this.token = null;
    localStorage.removeItem('currentUser');
  }

}






