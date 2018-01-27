import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RoomInfoService {

  constructor(private http : Http) { }


  roomInfo(): Observable <any>{
    return this.http.get('http://localhost:2222/api/roomInformation')
      .map(res => {
          return res.json(); // {status: 'ok', data: savedData}
        }
      )
      .catch (err => {
        return Observable.of(err.json())
      })

  }

}









