import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeNewPageComponent } from './resume-new-page.component';

describe('ResumeNewPageComponent', () => {
  let component: ResumeNewPageComponent;
  let fixture: ComponentFixture<ResumeNewPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeNewPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeNewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
