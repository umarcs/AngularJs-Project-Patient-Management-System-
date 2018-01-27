import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { AuthGuard } from '../_guards/index';
import { PatientRegComponent } from '../patient-reg/patient-reg.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { PatientCheckOutComponent } from '../patient-check-out/patient-check-out.component';
import { PatientInfoComponent } from '../patient-info/patient-info.component';
import { StaffInfoComponent } from '../staff-info/staff-info.component';
import { RoomInfoComponent } from '../room-info/room-info.component';
import { PatientEditInfoComponent } from '../patient-edit-info/patient-edit-info.component';
import { StaffEditInfoComponent } from '../staff-edit-info/staff-edit-info.component';
import { MiscComponent } from '../misc/misc.component';
import { DoctorsInfoComponent } from '../doctors-info/doctors-info.component';
import { DoctorEditInfoComponent } from '../doctor-edit-info/doctor-edit-info.component';
import { AddDoctorsComponent } from '../add-doctors/add-doctors.component';
import { AddStaffComponent } from '../add-staff/add-staff.component';
import { RoomEditInfoComponent } from '../room-edit-info/room-edit-info.component';
import { PatientVisitComponent } from '../patient-visit/patient-visit.component';
import { AddRoomsComponent } from '../add-rooms/add-rooms.component';
import { PatientRegInvoiceComponent } from '../patient-reg-invoice/patient-reg-invoice.component';
import { PatientChkOutInvoiceComponent } from '../patient-chk-out-invoice/patient-chk-out-invoice.component'
import { EditAdminProfileComponent } from '../edit-admin-profile/edit-admin-profile.component'

export const SECURE_ROUTES: Routes = [

    //{ path: '', component: DashboardComponent },
    { path: '', component: DashboardComponent ,canActivate: [AuthGuard]},
    { path: 'patient-reg', component: PatientRegComponent, canActivate: [AuthGuard] },
    { path: 'patient-info', component: PatientInfoComponent , canActivate: [AuthGuard]},
    { path: 'patient-visits', component: PatientVisitComponent, canActivate: [AuthGuard]},
    { path: 'patient-check-out/:pChkOut', component: PatientCheckOutComponent, canActivate: [AuthGuard] },
    { path: 'room-info', component: RoomInfoComponent, canActivate: [AuthGuard] },
    { path: 'staff-info', component: StaffInfoComponent, canActivate: [AuthGuard] },
    { path: 'patient-edit-info/:patientId', component: PatientEditInfoComponent, canActivate: [AuthGuard]},
    { path: 'staff-edit-info/:staffId', component: StaffEditInfoComponent, canActivate: [AuthGuard] },
    { path: 'users', component: MiscComponent, canActivate: [AuthGuard] },
    { path: 'doctors-info', component: DoctorsInfoComponent, canActivate: [AuthGuard] },
    { path: 'doctors-edit-info/:doctorId', component: DoctorEditInfoComponent, canActivate: [AuthGuard] },
    { path: 'add-doctors', component: AddDoctorsComponent,canActivate: [AuthGuard] },
    { path: 'add-staff', component: AddStaffComponent, canActivate: [AuthGuard] },
    { path: 'rooms-edit/:roomId', component: RoomEditInfoComponent, canActivate: [AuthGuard] },
    { path: 'add-rooms', component: AddRoomsComponent, canActivate: [AuthGuard] },
    { path: 'invoice/:id', component: PatientRegInvoiceComponent, canActivate: [AuthGuard] },
    { path: 'patient-checkOut-invoice/:id', component: PatientChkOutInvoiceComponent, canActivate: [AuthGuard] },
    { path: 'admin-edit-profile', component: EditAdminProfileComponent, canActivate: [AuthGuard] },
    

];