import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from '../profile/profile.component';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material';  
import { MatIconModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { EditWindowDialogComponent } from './edit-window-dialog/edit-window-dialog.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material'

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [  
    MatDatepickerModule,  
    { provide: MatDialogRef, useValue: {} },
  ],
  declarations: [
    ProfileComponent,
    EditWindowDialogComponent
  ],
  entryComponents:[
    EditWindowDialogComponent,
  ],
  exports: [ProfileComponent]
})

export class ProfileModule { }
