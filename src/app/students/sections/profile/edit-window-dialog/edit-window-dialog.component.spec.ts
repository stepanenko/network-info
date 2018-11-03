import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditWindowDialogComponent } from './edit-window-dialog.component';

describe('EditWindowDialogComponent', () => {
  let component: EditWindowDialogComponent;
  let fixture: ComponentFixture<EditWindowDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditWindowDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditWindowDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
