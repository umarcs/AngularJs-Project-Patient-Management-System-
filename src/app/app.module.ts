import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { DatepickerModule } from 'angular2-material-datepicker';
import { Ng2CompleterModule } from "ng2-completer";


// used to create fake backend
// import { fakeBackendProvider } from './_helpers/index';
// import { MockBackend, MockConnection } from '@angular/http/testing';
// import { BaseRequestOptions } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { AuthGuard } from './_guards/index';
import { AuthenticationService, UserService } from './_services/index';
import { LoginComponent } from './login/index';
import { HomeComponent } from './home/home.component';
import { PatientRegComponent } from './patient-reg/patient-reg.component';
import { PatientCheckOutComponent } from './patient-check-out/patient-check-out.component';
import { PatientInfoComponent } from './patient-info/patient-info.component';
import { RoomInfoComponent } from './room-info/room-info.component';
import { StaffInfoComponent } from './staff-info/staff-info.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PublicComponent } from './layouts/public.component';
import { SecureComponent } from './layouts/secure.component';
import { MoreInfoComponent } from './more-info-patient/more-info.component';
import { PatientEditInfoComponent } from './patient-edit-info/patient-edit-info.component';
import { StaffEditInfoComponent } from './staff-edit-info/staff-edit-info.component';
import { MiscComponent } from './misc/misc.component';
import { DoctorsInfoComponent } from './doctors-info/doctors-info.component';
import { DoctorEditInfoComponent } from './doctor-edit-info/doctor-edit-info.component';
import { AddDoctorsComponent } from './add-doctors/add-doctors.component';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { RoomEditInfoComponent } from './room-edit-info/room-edit-info.component';
import { AddRoomsComponent } from './add-rooms/add-rooms.component';
import { PatientVisitComponent } from './patient-visit/patient-visit.component';
import { MoreInfoVisitPatientComponent } from './more-info-visit-patient/more-info-visit-patient.component';
import { PatientRegInvoiceComponent } from './patient-reg-invoice/patient-reg-invoice.component';
import { PatientChkOutInvoiceComponent } from './patient-chk-out-invoice/patient-chk-out-invoice.component';
import { EditAdminProfileComponent } from './edit-admin-profile/edit-admin-profile.component';
import { MoreInfoDoctorComponent } from './more-info-doctor/more-info-doctor.component';
import { MoreInfoStaffComponent } from './more-info-staff/more-info-staff.component';

@NgModule({
    imports: [
        RouterModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        routing,
        MaterialModule,
        BrowserAnimationsModule,
        DatepickerModule,
        Ng2CompleterModule,

    ],
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent,
        PatientRegComponent,
        PatientCheckOutComponent,
        PatientInfoComponent,
        RoomInfoComponent,
        StaffInfoComponent,
        DashboardComponent,
        PublicComponent,
        SecureComponent,
        MoreInfoComponent,
        PatientEditInfoComponent,
        StaffEditInfoComponent,
        MiscComponent,
        DoctorsInfoComponent,
        DoctorEditInfoComponent,
        AddDoctorsComponent,
        AddStaffComponent,
        RoomEditInfoComponent,
        AddRoomsComponent,
        PatientVisitComponent,
        MoreInfoVisitPatientComponent,
        PatientRegInvoiceComponent,
        PatientChkOutInvoiceComponent,
        EditAdminProfileComponent,
        MoreInfoDoctorComponent,
        MoreInfoStaffComponent


    ],
    entryComponents: [MoreInfoComponent,MoreInfoDoctorComponent,MoreInfoStaffComponent,  MoreInfoVisitPatientComponent],
    providers: [
        AuthGuard,
      
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }