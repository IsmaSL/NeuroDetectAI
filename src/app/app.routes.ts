import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetecAdhdComponent } from './solutions/detec-adhd/detec-adhd.component';
import { FocusvrComponent } from './solutions/focusvr/focusvr.component';
import { HshopComponent } from './solutions/hshop/hshop.component';
import { VirtdahComponent } from './solutions/virtdah/virtdah.component';
import { VteaComponent } from './solutions/vtea/vtea.component';

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
        path: 'focusvr',
        component: FocusvrComponent
    },
    {
        path: 'hshop',
        component: HshopComponent,
    },
    {
        path: 'virtdah',
        component: VirtdahComponent,
    },
    {
        path: 'vtea',
        component: VteaComponent,
    },
    {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
