import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class EditRoomService {

  constructor(private http: Http) { }

  editRoomData(id: string, payload: any): Observable<any> {

    return this.http.put(`http://localhost:2222/api/rooms/${id}`, JSON.stringify(payload))
      .map(res => {
        return res.json();
      }
      )
      .catch(err => {
        return Observable.of(err.json())
      })
  }
}
