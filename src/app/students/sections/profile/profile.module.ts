import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from '../profile/profile.component';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import {MatIconModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    HttpClientModule,
    HttpModule
  ],
  declarations: [
    ProfileComponent
  ],
  exports: [ProfileComponent]
})
export class ProfileModule { }
