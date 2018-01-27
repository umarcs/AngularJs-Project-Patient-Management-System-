import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from '../login/login.component';
import { AuthGuard } from '../_guards/index';


export const PUBLIC_ROUTES: Routes = [
    { path : "" , component : LoginComponent, }
];