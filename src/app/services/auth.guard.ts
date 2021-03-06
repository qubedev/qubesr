import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot): boolean {
    console.log(route);
    let authInfo = {
      authenticated: false,
    };
    if(localStorage.getItem('qubelive_user')){
      authInfo = {      authenticated: true}
    }
    if (!authInfo.authenticated) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}