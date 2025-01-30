import { Routes } from '@angular/router';
import { LayoutComponent } from './component/layout/layout.component';


export const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
        ]
    }
];
