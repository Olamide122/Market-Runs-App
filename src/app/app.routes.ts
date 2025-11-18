import { Routes } from '@angular/router';
import { Home } from './common/home/home';
import { Groceries } from './common/groceries/groceries';
import { Clothen } from './common/clothen/clothen';
import { Register } from './common/register/register';
import { Toiletries } from './common/toiletries/toiletries';
import { Login } from './common/login/login';
import { PageNotFound } from './page-not-found/page-not-found';

export const routes: Routes = [
    // {
    //     path: '', component: Login, pathMatch: "full"
    // },
    {
        path: 'home', component: Home
    },

     {
        path: '', component: Login,
    },
    {
        path: 'groceries', component: Groceries
    },
    {
        path: 'clothen', component: Clothen
    },
    {
        path: 'register', component: Register
    },
    {
        path: 'toiletries', component: Toiletries
    },
    
    {
        path: '**', component: PageNotFound
    },
    
];
