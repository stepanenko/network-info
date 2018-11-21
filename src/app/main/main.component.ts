import { Component, OnInit } from '@angular/core';
import { Place } from './models/place';
import { AuthenticationService } from 'src/app/auth/authentication.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  commonPlaces: Place[] = [
    {name: 'Home',      location: '/home',      icon: 'home'},
    {name: 'Dashboard', location: '/dashboard', icon: 'bar_chart'},
    {name: 'Students',  location: '/students',  icon: 'school'}
  ];

  places$: Observable<Place[]> = this.authService.isAdmin$.pipe(
    map(yes => yes
      ? [{name: 'Admin', location: '/admin', icon: 'perm_identity'}]
      : []),
    map(adminPlace => this.commonPlaces.concat(adminPlace))
  );

  constructor(private authService: AuthenticationService) {}
}
