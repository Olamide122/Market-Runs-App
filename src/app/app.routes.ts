import { Routes } from '@angular/router';
import { Home } from './common/home/home';
import { Groceries } from './common/groceries/groceries';
import { Clothen } from './common/clothen/clothen';
import { Register } from './common/register/register';
import { Toiletries } from './common/toiletries/toiletries';
import { Login } from './common/login/login';
import { PageNotFound } from './page-not-found/page-not-found';
import { authGuard } from './auth-guard';

export const routes: Routes = [
   
    {
        path: 'home', component: Home, canActivate:[authGuard]
    },

     {
        path: '', component: Login 
    },
    {
        path: 'groceries', component: Groceries, canActivate:[authGuard]
    },
    {
        path: 'clothen', component: Clothen,canActivate:[authGuard]
    },
    {
        path: 'register', component: Register,
    },
    {
        path: 'toiletries', component: Toiletries,canActivate:[authGuard]
    },
    
    {
        path: '**', component: PageNotFound
    },
    
];
