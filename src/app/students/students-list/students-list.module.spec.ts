import { StudentsListModule } from './students-list.module';

describe('StudentsListModule', () => {
  let studentsListModule: StudentsListModule;

  beforeEach(() => {
    studentsListModule = new StudentsListModule();
  });

  it('should create an instance', () => {
    expect(studentsListModule).toBeTruthy();
  });
});
