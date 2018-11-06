import { Component, Input } from '@angular/core';
import { Place } from 'src/app/main/models/place';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  opened = true;

  minimized = false;

  @Input()
  places: Place[] = [];
}
