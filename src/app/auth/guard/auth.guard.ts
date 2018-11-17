import { Injectable } from '@angular/core';
import { Router, CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

import { take, tap, map } from 'rxjs/operators';

import { AngularFireAuth } from 'angularfire2/auth';
import { AuthenticationService } from '../authentication.service';
import { Observable } from 'rxjs';
@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private authenticationService: AuthenticationService
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authenticationService.afAuth.authState.pipe(
      map(authState => !!authState),
      tap(authenticated => !authenticated && this.router.navigate(['/login']))
    );
  }
}
