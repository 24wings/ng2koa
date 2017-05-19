import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherLessonComponent } from './teacher-lesson.component';

describe('TeacherLessonComponent', () => {
  let component: TeacherLessonComponent;
  let fixture: ComponentFixture<TeacherLessonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherLessonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
