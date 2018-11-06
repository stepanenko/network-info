import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Student } from '../../../../students/models/student.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-window-dialog',
  templateUrl: './edit-window-dialog.component.html',
  styleUrls: ['./edit-window-dialog.component.scss']
})
export class EditWindowDialogComponent implements OnInit {

  profileDialogForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditWindowDialogComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: Student) {}

  ngOnInit() {
    this.createForm();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  createForm() {
    this.profileDialogForm = this.formBuilder.group({
      name: [this.data.name, [Validators.required]],
      surname: [this.data.surname, [Validators.required]],
      group: [this.data.group, [Validators.required]],
      grade: [this.data.grade, [Validators.required]],
      email: [this.data.email, [Validators.required, Validators.email]],
      address: [this.data.address, [Validators.required]],
      phone: [this.data.phone, [Validators.required]],
      birthdate: [new Date(this.data.birthdate), [Validators.required]],
      description: [this.data.description],
    });
  }
}
