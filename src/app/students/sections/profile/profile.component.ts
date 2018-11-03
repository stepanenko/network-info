import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/student.interface';
import { switchMap } from 'rxjs/operators';
import { StudentsService } from '../../../students/students.service'
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig} from '@angular/material';
import { EditWindowDialogComponent } from './edit-window-dialog/edit-window-dialog.component';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
  selectedStudent:Student;
  students: Student[];
  imgUrl: string;

  constructor( 
    private studentsService: StudentsService,
    private route: ActivatedRoute, 
    public dialog: MatDialog) { }
    
  ngOnInit() {
    this.subscribeToStudent();
  }

  subscribeToStudent() {
    this.route.paramMap.pipe(
      switchMap(pmap => this.studentsService.getStudent(pmap.get("id")))
   )
   .subscribe(student => {
     this.selectedStudent = student;
     this.imgUrl = this.studentsService.getImage(this.selectedStudent.id);
   });
  }

  rewriteStudentObject(result) {
    this.selectedStudent = result;
  }

  openDialog() {
    return this.dialog.open(EditWindowDialogComponent, {
      disableClose: true,
      autoFocus: true,
      width: '600px',
      data: this.selectedStudent
    });
  }

  onEditClick() {
    this.openDialog().afterClosed().subscribe(result => {
      result && this.rewriteStudentObject(result); 
    });
  }
}
