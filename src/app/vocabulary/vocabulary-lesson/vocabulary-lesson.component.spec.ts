import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VocabularyLessonComponent } from './vocabulary-lesson.component';

describe('VocabularyLessonComponent', () => {
  let component: VocabularyLessonComponent;
  let fixture: ComponentFixture<VocabularyLessonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VocabularyLessonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VocabularyLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
