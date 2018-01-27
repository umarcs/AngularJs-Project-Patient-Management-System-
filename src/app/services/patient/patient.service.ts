import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
@Injectable()
export class PatientService {

  constructor(private http: Http) { }

  patientReg(data: {}): Observable<any> {
    return this.http.post('http://localhost:2222/api/patient-registration', JSON.stringify(data))
      .map(res => {
        return res.json(); // {status: 'ok', data: savedData}
      }
      )
      .catch(err => {
        return Observable.of(err.json())
      })

  }
  // patient information
  patientInfo(): Observable<any> {
    return this.http.get('http://localhost:2222/api/patient/patientInformation')
      .map(res => {
        return res.json()
      })
      .catch(err => {
        return Observable.of(err.json())
      })
  }
  //delete patient
  deletePatient(id: any): Observable<any> {
    return this.http.post('http://localhost:2222/api/patient/deletePatientRecord', JSON.stringify({ id }))
      .map(res => {
        return res.json()
      })
      .catch(err => {
        return Observable.of(err.json())
      })
  }
  // patient info before edit
  patientInfoById(id: any): Observable<any> {
    return this.http.get(`http://localhost:2222/api/patient/getPatientInfoBeforeEdit/${id}`)
      .map(res => {
        return res.json()
      })
      .catch(err => {
        return Observable.of(err.json())
      })
  }
  //patient edit information
  editPatient(id: any, data: any): Observable<any> {
    return this.http.put(`http://localhost:2222/api/patient/editPatientInformation/${id}`, JSON.stringify(data))
      .map(res => {
        return res.json()
      })
      .catch(err => {
        return Observable.of(err.json())
      })
  }
  //Add patient Data/History after full checkUp
  addPatientHistory(data: {}): Observable<any> {
    return this.http.post('http://localhost:2222/api/patient/storePatientHistoryAfterCheckUp', (data))
      .map(res => {
        return res.json(); // {status: 'ok', data: savedData}
      }
      )
      .catch(err => {
        return Observable.of(err.json())
      })

  }
  //patient visits
  patientVisitInfo(): Observable<any> {
    return this.http.get('http://localhost:2222/api/patient/patientVisitInfo')
      .map(res => {
        return res.json()
      })
      .catch(err => {
        return Observable.of(err.json())
      })
  }
  // get info of visit patient for(view more) by id
  patientVisitInfoById(id : any): Observable<any> {
    
    return this.http.get(`http://localhost:2222/api/patient/getPatientVisitInfoById/${id}`)
      .map(res => {
        return res.json()
      })
      .catch(err => {
        return Observable.of(err.json())
      })
  }
    // patient Searching
    searchPatient(data: any){
      return this.http.post('http://localhost:2222/api/patient/patientSearching', (data))
     .map(res => {
        return res.json()
      })
      .catch(err => {
        return Observable.of(err.json())
      })
    }
}