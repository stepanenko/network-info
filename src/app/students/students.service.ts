import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { distinctUntilChanged, switchMap, shareReplay } from 'rxjs/operators';
import { map as _map } from 'lodash/fp';

import { Student } from 'src/app/shared/models/student.interface';
import { DatabaseService } from 'src/app/shared/services/db.service';

@Injectable()
export class StudentsService {

  studentChange$ = new BehaviorSubject<string>('');
  selectedStudent$: Observable<Student>;

  constructor(private db: DatabaseService) {

    this.selectedStudent$ = this.studentChange$.pipe(
      distinctUntilChanged(),
      switchMap(id => this.db.getStudent(id)),
      shareReplay(1)
    );
  }

  selectStudent(id: string) {
    this.studentChange$.next(id);
  }

}
