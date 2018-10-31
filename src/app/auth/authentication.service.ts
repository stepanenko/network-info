import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  register(data) {
    localStorage.setItem('user', JSON.stringify(data));
  }
}
