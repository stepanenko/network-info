import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/auth/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private user: {};

  constructor(private authentificationService: AuthenticationService) { }

  ngOnInit() {
    this.user = this.authentificationService.getCurrentUser();
  }

}
