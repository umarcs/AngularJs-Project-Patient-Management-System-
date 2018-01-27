import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DoctorService {

  constructor(private http: Http) { }

  //add doctors
  addDoctor(data: {}): Observable<any> {
    return this.http.post('http://localhost:2222/api/doctors/addDoctor', JSON.stringify(data))
      .map(res => {
        return res.json();
      }
      )
      .catch(err => {
        return Observable.of(err.json())
      })

  }
  //get info of doctors
  doctorsInfo(): Observable<any> {
    return this.http.get('http://localhost:2222/api/doctors/doctorsInformation')
      .map(res => {
        return res.json();
      }
      )
      .catch(err => {
        return Observable.of(err.json())
      })

  }
  // delete doctor record
  deleteDoctorRecord(id: any) {
    return this.http.post('http://localhost:2222/api/doctors/deleteDoctorRecord', JSON.stringify(id))
      .map(res => {
        return res.json()
      }
      )
      .catch(err => {
        return Observable.of(err.json())
      })
  }
  // doctor information before edit
  doctorInfoById(id: any) {
    return this.http.get(`http://localhost:2222/api/doctors/doctorInformationById/${id}`)
      .map(res => {
        return res.json()
      })
      .catch(err => {
        return Observable.of(err.json())
      })

  }
    // edit doctor Information
      editDoctor(id: string, data: any) : Observable  <any>{

      return this.http.put(`http://localhost:2222/api/staff/editDoctorInformation/${id}`,JSON.stringify(data) )
      .map(res => {
          return res.json(); 
        }
      )
      .catch (err => {
        return Observable.of(err.json())
      })
      
    }
}


