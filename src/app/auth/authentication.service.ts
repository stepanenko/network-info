import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(
    public afAuth: AngularFireAuth,
    private router: Router

  ) { }

  register(data) {
    localStorage.setItem('user', JSON.stringify(data));
  }

  loginEmail(email: string, pass: string) {
    return from(this.afAuth.auth.signInWithEmailAndPassword(email, pass));
  }

  getAuth() {
    return this.afAuth.authState;
  }

  logout() {
    this.router.navigate(['/login']);
    return this.afAuth.auth.signOut();
  }
}
