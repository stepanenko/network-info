import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  register(data) {
    localStorage.setItem('user', JSON.stringify(data));
  }
  
  logout() {
    localStorage.removeItem('currentUser');
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
}
