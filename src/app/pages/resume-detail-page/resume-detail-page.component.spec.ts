import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeDetailPageComponent } from './resume-detail-page.component';

describe('ResumeDetailPageComponent', () => {
  let component: ResumeDetailPageComponent;
  let fixture: ComponentFixture<ResumeDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
