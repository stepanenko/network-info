import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/student.interface';
import { switchMap } from 'rxjs/operators';
import { StudentsService } from '../../../students/students.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
  selectedStudent:Student;
  students: Student[];
  imgUrl: string;

  constructor( private profileService: StudentsService,
    private route: ActivatedRoute) { }
    
  ngOnInit() {
    this.subscribeToStudent();
  }

  subscribeToStudent(): void{
    this.route.paramMap.pipe(
      switchMap(pmap => this.profileService.getStudent(pmap.get("id")))
   )
   .subscribe(student => {
     this.selectedStudent = student;
     this.imgUrl = this.profileService.getImage(this.selectedStudent.id);
   });
  }
}
