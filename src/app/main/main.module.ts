import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MainComponent } from './main.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainRoutingModule } from './main-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { DatabaseService } from '../shared/services/db.service';

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MainRoutingModule,
    MatToolbarModule,
    MatButtonModule
  ],
  declarations: [
    MainComponent,
    HeaderComponent,
    SidebarComponent,
    NotFoundComponent
  ],
  exports: [ MainComponent ],
  providers: [
    DatabaseService
  ]
})
export class MainModule { }
