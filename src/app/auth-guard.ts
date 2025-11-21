import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { Master } from './service/master';

export const authGuard: CanActivateFn = (route, state) => {
 let router=inject(Router);
 let service=inject(Master);

 if(service.isLoggedIn()){
    return true;
 }else{
    alert('NOT AUTHORISED');
    router.navigateByUrl('/')
    return false;
 }

};