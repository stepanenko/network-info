import { Component, OnInit } from '@angular/core';
import { Place } from './models/place';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  places: Place[] = [
    {name: 'Home',      location: '/home',      icon: 'home'},
    {name: 'Dashboard', location: '/dashboard', icon: 'bar_chart'},
    {name: 'Students',  location: '/students',  icon: 'school'},
    {name: 'Admin',     location: '/admin',     icon: 'perm_identity'}
  ];
}
