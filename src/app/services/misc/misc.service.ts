import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map'
@Injectable()
export class MiscService {

  constructor(private http: Http) {  }


  getMiscData():Observable<any> {
    
    let url = `http://localhost:8080/api/users/umer`;
    return this.http.get(url).map(
      res => {
        console.log("som val")
        const data = res.json();
        return data;
      }
    )
  }

}







