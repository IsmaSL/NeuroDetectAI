import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetecAdhdComponent } from './solutions/detec-adhd/detec-adhd.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'detec-adhd',
        component: DetecAdhdComponent
    },
    {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
