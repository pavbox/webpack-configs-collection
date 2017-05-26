import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const route:Routes = [
    {
        path: '**',
        component: Component
    }
];

export const routing:ModuleWithProviders = RouterModule.forRoot(route);
