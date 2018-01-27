import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map'
@Injectable()
export class GithubService {

  constructor(private http: Http) { }


  getUser(): Observable<any> {

    let url = `http://localhost:8080/api/users/umer`;
    return this.http.get(url).map(
      res => {
        console.log('RES HERE', res)
        const data = res.json();
        console.log('data HERE', data)
        //console.log(data);
        return data;
      }
    )
  }

 }
