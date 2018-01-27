import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class DeleteRoomService {

  constructor(private http : Http) { }

  deleteRoom(id : any): Observable <any>{
    return this.http.post('http://localhost:2222/api/roomDeleteRecord' ,JSON.stringify({id}))
      .map(res => {
          return res.json(); // {status: 'ok', data: savedData}
        }
      )
      .catch (err => {
        return Observable.of(err)
      })

  }


}




  
