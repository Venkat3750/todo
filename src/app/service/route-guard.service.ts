import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate { //it will check whether the user is actually logged in, if not it won't allow users to access todo page

  constructor(private hardcodedAuthenticationService: HardcodedAuthenticationService,
    private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.hardcodedAuthenticationService.isUserLoggedIn())
      return true;
    this.router.navigate(['login'])   //Makes user to land on login page when accessing todos without logging in
    return false;
  }
}
