import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Student } from '../../../../students/models/student.interface'

@Component({
  selector: 'app-edit-window-dialog',
  templateUrl: './edit-window-dialog.component.html',
  styleUrls: ['./edit-window-dialog.component.scss']
})
export class EditWindowDialogComponent{
  
  constructor(
    public dialogRef: MatDialogRef<EditWindowDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Student) {}
 
    onNoClick(): void {
      this.dialogRef.close();
    }
}
