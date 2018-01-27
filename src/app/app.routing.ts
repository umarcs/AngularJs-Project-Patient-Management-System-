import { Routes, RouterModule } from '@angular/router';



import { PublicComponent } from './layouts/public.component';
import { SecureComponent } from './layouts/secure.component';
import { SECURE_ROUTES } from './secure/secure.routes';
import { PUBLIC_ROUTES } from './public/public.routes';

const appRoutes: Routes = [

    { path: 'login', component: PublicComponent,  children: PUBLIC_ROUTES },

    { path: 'admin', component: SecureComponent, children: SECURE_ROUTES },

    // otherwise redirect to home
    { path: '**', redirectTo: 'admin' }
];

export const routing = RouterModule.forRoot(appRoutes);






