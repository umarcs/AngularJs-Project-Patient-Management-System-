import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class AddRoomService {

  constructor(private http : Http) { }


  addRoom(data :{}): Observable <any>{
    return this.http.post('http://localhost:2222/api/addRoom', JSON.stringify(data))
      .map(res => {
          return res.json(); // {status: 'ok', data: savedData}
        }
      )
      .catch (err => {
        return Observable.of(err.json())
      })

  }

}




