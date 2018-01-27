import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class GetInfoBeforeEditService {

  constructor(private http : Http) { }

  roomInfo(objOfId : any): Observable <any>{
     return this.http.post('http://localhost:2222/api/getRoomInfoBeforeEdit', JSON.stringify(objOfId))
      .map(res => {
          return res.json(); 
        }
      )
      .catch (err => {
        return Observable.of(err.json())
      })
  }

}
